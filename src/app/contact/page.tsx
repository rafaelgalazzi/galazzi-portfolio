'use client';

import BaseContactCard from "@/components/cards/BaseContactCard";
import BaseText from "@/components/text/BaseText";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
        <BaseText fontSize="xxxl" justify="center" color="text-white" className="mb-6">
          {t("contact.title")}
        </BaseText>
        <BaseText className="mt-6" fontSize="md" justify="center" color="muted">
          {t("contact.description")}
        </BaseText>
        <BaseContactCard 
          className="mt-6"
          label="Email" 
          link="rafaelgalazzi@ucl.br"
        >
        </BaseContactCard>
        <BaseContactCard 
          className="mt-6"
          label="Github" 
          link="https://github.com/rafaelgalazzi"
        >
        </BaseContactCard>
        <BaseContactCard 
          className="mt-6"
          label="Linkedin" 
          link="https://www.linkedin.com/in/rafael-galazzi-786487130/"
        >
        </BaseContactCard>
      </motion.section>
    </>
  );
}