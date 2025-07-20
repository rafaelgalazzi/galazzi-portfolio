'use client';

import BaseText from "@/components/text/BaseText";
import { useTranslation } from 'react-i18next';
import BaseSlider from "@/components/sliders/BaseSlider";
import BaseItemCard from "@/components/cards/BaseItemCard";
import GridLayout from "@/components/layouts/GridLayout";

export default function About() {
  const { t } = useTranslation();
  const now = new Date();
  const start = new Date("2021-05-01").getFullYear();
  const timeSinceStart = now.getFullYear() - start;

  const additionalCourses = [
    {
      title: t("about.additionalCourses.course1.title"),
      description: t("about.additionalCourses.course1.description"),
    },
    {
      title: t("about.additionalCourses.course2.title"),
      description: t("about.additionalCourses.course2.description"),
    },
    {
      title: t("about.additionalCourses.course3.title"),
      description: t("about.additionalCourses.course3.description"),
    },
    {
      title: t("about.additionalCourses.course4.title"),
      description: t("about.additionalCourses.course4.description"),
    },
    {
      title: t("about.additionalCourses.course5.title"),
      description: t("about.additionalCourses.course5.description"),
    },
    {
      title: t("about.additionalCourses.course6.title"),
      description: t("about.additionalCourses.course6.description"),
    },
    {
      title: t("about.additionalCourses.course7.title"),
      description: t("about.additionalCourses.course7.description"),
    },
    {
      title: t("about.additionalCourses.course8.title"),
      description: t("about.additionalCourses.course8.description"),
    },
  ];

  const certifications = [
    {
      title: t("about.certifications.course1"),
    },
    {
      title: t("about.certifications.course2"),
    },
    {
      title: t("about.certifications.course3"),
    },
  ];

  const slides = [
    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white" className="mb-6">
        {t("about.title")}
      </BaseText>
      <BaseText fontSize="md" justify="center" color="muted" className="max-w-2xl mx-auto">
        {t("about.description", { timeSinceStart })}
      </BaseText>
    </>,

    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white" className="mb-6">
        {t("about.education.title")}
      </BaseText>
      <BaseText fontSize="md" justify="center" color="muted" className="max-w-2xl mx-auto mb-3">
        {t("about.education.description")}
      </BaseText>
      <BaseText fontSize="sm" justify="center" color="muted" className="max-w-2xl mx-auto">
        {t("about.education.comment")}
      </BaseText>
    </>,

    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white" className="mb-8">
        {t("about.certifications.title")}
      </BaseText>
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {certifications.map((cert, idx) => (
          <BaseItemCard key={idx}>
            <BaseText fontSize="md" color="text-white" className="font-semibold">
              {cert.title}
            </BaseText>
          </BaseItemCard>
        ))}
      </div>
    </>,

    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white" className="mb-8">
        {t("about.additionalCourses.title")}
      </BaseText>
      <GridLayout>
        {additionalCourses.map((course, idx) => (
          <BaseItemCard key={idx}>
            <BaseText fontSize="md" color="text-white" className="font-semibold mb-1">
              {course.title}
            </BaseText>
            <BaseText fontSize="sm" color="muted">
              {course.description}
            </BaseText>
          </BaseItemCard>
        ))}
      </GridLayout>
    </>
  ];

  return <BaseSlider slides={slides} />;
}
