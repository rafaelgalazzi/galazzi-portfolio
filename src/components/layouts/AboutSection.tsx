'use client';

import { motion } from 'framer-motion';
import BaseText from '@/components/text/BaseText';
import Card from '@/components/cards/Card';

interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function AboutSection({ title, children, className = '' }: AboutSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <BaseText fontSize="xxl" fontWeight="semibold" color="primary" className="mb-6 border-l-4 border-accent pl-4">
        {title}
      </BaseText>
      <Card hoverEffect={true}>{children}</Card>
    </motion.section>
  );
}
