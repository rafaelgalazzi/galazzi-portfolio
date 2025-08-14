'use client';

import { useEffect, useState } from 'react';

interface GeometricShape {
  id: number;
  type: 'circle' | 'square' | 'triangle';
  size: number;
  top: string;
  left: string;
  opacity: number;
  color: string;
  animationDuration: number;
  animationDelay: number;
}

export default function GeometricBackground() {
  const [shapes, setShapes] = useState<GeometricShape[]>([]);

  useEffect(() => {
    // Generate random geometric shapes
    const generateShapes = () => {
      const newShapes: GeometricShape[] = [];
      const shapeTypes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
      const lightColors = ['bg-accent/10', 'bg-primary/5', 'bg-secondary/10'];
      const darkColors = ['bg-accent/20', 'bg-primary/10', 'bg-secondary/20'];

      // Check if we're in light mode
      const isLightMode = document.documentElement.classList.contains('light');
      const colors = isLightMode ? lightColors : darkColors;

      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          size: Math.floor(Math.random() * 100) + 50, // 50-150px
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.1 + 0.05, // 5-15% opacity
          color: colors[Math.floor(Math.random() * colors.length)],
          animationDuration: Math.random() * 20 + 10, // 10-30s
          animationDelay: Math.random() * 5, // 0-5s delay
        });
      }

      setShapes(newShapes);
    };

    generateShapes();

    // Regenerate shapes when theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          generateShapes();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.color} animate-float`}
          style={{
            top: shape.top,
            left: shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
            animationDuration: `${shape.animationDuration}s`,
            animationDelay: `${shape.animationDelay}s`,
          }}
        >
          {shape.type === 'circle' && <div className="rounded-full w-full h-full" />}
          {shape.type === 'square' && <div className="w-full h-full rotate-45" />}
          {shape.type === 'triangle' && (
            <div
              className="w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-current border-r-[25px] border-r-transparent"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid currentColor`,
              }}
            />
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(0) translateX(20px) rotate(180deg);
          }
          75% {
            transform: translateY(20px) translateX(10px) rotate(270deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
