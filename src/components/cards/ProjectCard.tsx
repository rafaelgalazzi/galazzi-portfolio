'use client';

import { motion } from 'framer-motion';
import Card from '@/components/cards/Card';
import BaseText from '@/components/text/BaseText';
import BaseLink from '@/components/link/BaseLink';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  className?: string;
}

export default function ProjectCard({ title, description, tags, link, className = '' }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className={className}>
      <Card hoverEffect={true} className="h-full min-h-[340px]">
        <BaseText fontSize="lg" fontWeight="semibold" color="primary" className="mb-2">
          {title}
        </BaseText>
        <BaseText fontSize="sm" color="muted" className="mb-4" lineHeight="relaxed">
          {description}
        </BaseText>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent">
              {tag}
            </span>
          ))}
        </div>
        {link && <BaseLink href={link}>View Project →</BaseLink>}
      </Card>
    </motion.div>
  );
}
