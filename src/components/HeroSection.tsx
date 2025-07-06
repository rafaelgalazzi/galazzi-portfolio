"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center px-4 py-16 sm:py-24 bg-background text-foreground"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
        {t("hero.title")}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto">
        {t("hero.description")}
      </p>
      <a
        href="#contato"
        className="mt-8 inline-block px-6 py-3 bg-button text-button-foreground rounded-xl hover:scale-105 transition"
      >
        {t("hero.cta")}
      </a>
    </motion.section>
  );
}
