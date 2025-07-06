'use client';

import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { LucideProps } from 'lucide-react';

interface BaseIconProps extends LucideProps {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
  circle?: boolean;
}

export default function BaseIcon({
  name,
  color,
  size = 20,
  className = '',
  circle = false,
  ...props
}: BaseIconProps) {
  if (!name) {
    console.warn('BaseIcon: "name" is required.');
    return null;
  }

  const icon = (
    <DynamicIcon
      name={name}
      size={size}
      color={color ?? 'currentColor'}
      {...props}
    />
  );

  if (!circle) {
    return icon;
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-button text-button-foreground transition-colors duration-300 ${className}`}
      style={{ width: size + 16, height: size + 16 }}
    >
      {icon}
    </span>
  );
}
