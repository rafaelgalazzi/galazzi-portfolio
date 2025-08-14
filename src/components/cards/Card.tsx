interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = false }: CardProps) {
  return (
    <div
      className={`
      bg-card-bg 
      border 
      border-card-border 
      rounded-xl 
      p-6
      transition-all 
      duration-300
      ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : ''}
      ${className}
    `}
    >
      {children}
    </div>
  );
}
