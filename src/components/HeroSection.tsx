'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BaseText from './text/BaseText';
import BaseButton from './buttons/BaseButton';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="text-center px-4 py-16 sm:py-24 text-foreground relative"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: 'easeOut',
        }}
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-accent/20 blur-xl -z-10"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: 'easeOut',
        }}
      >
        <BaseText fontSize="xxxl" justify="center" color="text-white" className="font-bold tracking-tight">
          {t('hero.title')}
        </BaseText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: 'easeOut',
        }}
      >
        <BaseText className="mt-6 max-w-2xl mx-auto leading-relaxed" fontSize="md" justify="center" color="muted">
          {t('hero.description')}
        </BaseText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.8,
          ease: 'easeOut',
        }}
        className="mt-10 flex justify-center"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <BaseButton> {t('hero.cta')} </BaseButton>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
