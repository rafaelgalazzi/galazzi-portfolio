'use client';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const projects = [
  'Easy Access',
  'Tohodenki',
  'Cootraporter',
  'Medme-Hilab',
  'Egnex/Nexomobi Charge Control',
  'Octo',
  'House DO'
];


export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 0, x: -50 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4 py-16 sm:py-24 text-foreground"
      >
        
      </motion.section>
    </>
  );
}