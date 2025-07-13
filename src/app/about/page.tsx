'use client';

import BaseText from "@/components/text/BaseText";
import { useTranslation } from 'react-i18next';
import BaseSlider from "@/components/sliders/BaseSlider";

export default function About() {
  const { t } = useTranslation();
  const now = new Date();
  const start = new Date("2021-05-01").getFullYear();
  const timeSinceStart = now.getFullYear() - start;

  const slides = [
    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white">{t("about.title")}</BaseText>
      <BaseText className="mt-6" fontSize="md" justify="left" color="muted">{t("about.description", { timeSinceStart })}</BaseText>
    </>,

    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white">{t("about.education.title")}</BaseText>
      <BaseText className="mt-6" fontSize="md" justify="left" color="muted">{t("about.education.description")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.education.comment")}</BaseText>
    </>,
    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white">{t("about.certifications.title")}</BaseText>
      <BaseText className="mt-6" fontSize="md" justify="left" color="muted">{t("about.certifications.course1")}</BaseText>
      <BaseText className="mt-2" fontSize="md" justify="left" color="muted">{t("about.certifications.course2")}</BaseText>
      <BaseText className="mt-2" fontSize="md" justify="left" color="muted">{t("about.certifications.course3")}</BaseText>
    </>,
    <>
      <BaseText fontSize="xxxl" justify="center" color="text-white">{t("about.additionalCourses.title")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course1.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course1.description")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course2.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course2.description")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course3.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course3.description")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course4.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course4.description")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course5.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course5.description")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course6.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course6.description")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course7.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course7.description")}</BaseText>

      <BaseText className="mt-6" fontSize="md" justify="left" color="text-white">{t("about.additionalCourses.course8.title")}</BaseText>
      <BaseText fontSize="sm" justify="left" color="muted">{t("about.additionalCourses.course8.description")}</BaseText>
    </>
  ]


  return (
    <>
      <BaseSlider slides={slides} />
    </>
  );
}