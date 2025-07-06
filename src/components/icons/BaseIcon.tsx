'use client';

import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { LucideProps } from 'lucide-react';

interface BaseIconProps extends LucideProps {
  name: IconName;
  color?: string;
}

export default function BaseIcon({
  name,
  color = 'white',
  ...props
}: BaseIconProps) {
  if (!name) {
    console.warn('BaseIcon: "name" is required.');
    return null;
  }

  return <DynamicIcon name={name} color={color} {...props} />;
}
