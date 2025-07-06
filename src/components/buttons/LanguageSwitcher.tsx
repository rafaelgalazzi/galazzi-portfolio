"use client";
import { useTranslation } from "react-i18next";
import BaseSelect from "../Inputs/BaseSelect";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const options = [
    { label: "PT", value: "pt" },
    { label: "EN", value: "en" },
  ];

  return (
    <BaseSelect
      value={i18n.language}
      options={options}
      onChange={(e) => i18n.changeLanguage(e)}
    />
  );
}
