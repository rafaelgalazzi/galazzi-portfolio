"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BaseText from "./text/BaseText";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center px-4 py-16 sm:py-16 text-foreground"
    >
      <BaseText fontSize="xxxl" justify="center" color="text-white">
        {t("hero.title")}
      </BaseText>
      <BaseText className="mt-6" fontSize="md" justify="center" color="muted">
        {t("hero.description")}
      </BaseText>
      
    </motion.section>
  );
}
