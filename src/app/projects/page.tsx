'use client';
import { useTranslation } from "react-i18next";
import BaseText from "@/components/text/BaseText";
import BaseItemCard from "@/components/cards/BaseItemCard";
import GridLayout from "@/components/layouts/GridLayout";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: 'Easy Access',
  },
  {
    id: 2,
    title: 'Tohodenki',
  },
  {
    id: 3,
    title: 'Cootraporter',
  },
  {
    id: 4,
    title: 'Medme-Hilab',
  },
  {
    id: 5,
    title: 'Egnex/Nexomobi Charge Control',
  },
  {
    id: 6,
    title: 'Octo',
  },
  {
    id: 7,
    title: 'House DO',
  },
];


export default function Projects() {
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
          {t("projects.title")}
        </BaseText>
        <GridLayout>
          {projects.map((project) => (
            <BaseItemCard className="cursor-pointer" key={project.id}>
              <BaseText fontSize="md" justify="center" color="text-white">
                {project.title}
              </BaseText>
            </BaseItemCard>
          ))}
        </GridLayout>
      </motion.section>
    </>
  );
}