'use client';

import BaseContactCard from '@/components/cards/BaseContactCard';
import BaseText from '@/components/text/BaseText';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/layouts/ContactForm';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-4 sm:py-16 text-foreground"
      >
        <BaseText fontSize="xxxl" justify="center" color="text-white" className="mb-6" fontWeight="semibold">
          {t('contact.title')}
        </BaseText>
        <BaseText className="mt-6 mb-12" fontSize="md" justify="center" color="muted" lineHeight="relaxed">
          {t('contact.description')}
        </BaseText>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-16">
          <BaseContactCard label="Email" link="rafaelgalazzi.dev@gmail.com" />
          <BaseContactCard label="Github" link="https://github.com/rafaelgalazzi" />
          <BaseContactCard label="Linkedin" link="https://www.linkedin.com/in/rafael-galazzi-786487130/" />
        </div>

        <ContactForm />
      </motion.section>
    </>
  );
}
