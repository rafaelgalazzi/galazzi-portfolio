'use client';
import { useTranslation } from 'react-i18next';
import BaseText from '@/components/text/BaseText';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/cards/ProjectCard';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: ['Vue.js', 'Node.js', 'MySQL', 'Moleculer.js', 'Microservices', 'JavaScript'],
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'JavaScript'],
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tags: [
        'Vue.js',
        'Express',
        'Clean Architecture',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'TypeORM',
        'Sequelize',
        'MySQL',
        'Bootstrap',
      ],
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      tags: ['Vue.js', 'React.js', 'Node.js', 'TypeScript', 'JavaScript', 'MySQL', 'Docker', 'PWA', 'Bootstrap'],
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      tags: ['React.js', 'React Query', 'Redux', 'Node.js', 'Express', 'PostgreSQL'],
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      tags: [
        'React.js',
        'Vue.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'TypeORM',
        'PostgreSQL',
        'MySQL',
        'Laravel',
        'PHP',
        'Inertia.js',
        'Bootstrap',
      ],
    },
    {
      id: 7,
      title: t('projects.project7.title'),
      description: t('projects.project7.description'),
      tags: ['React.js', 'Express', 'Node.js', 'TypeScript', 'JavaScript', 'PostgreSQL', 'IoT', 'Bootstrap'],
    },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-4 sm:py-16 text-foreground"
      >
        <BaseText fontSize="xxxl" justify="center" color="text-white" className="mb-6" fontWeight="semibold">
          {t('projects.title')}
        </BaseText>

        <BaseText fontSize="md" justify="center" color="muted" className="mb-12 max-w-2xl mx-auto" lineHeight="relaxed">
          {t('projects.description')}
        </BaseText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard title={project.title} description={project.description} tags={project.tags} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
