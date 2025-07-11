'use client';

import BaseLink from "../link/BaseLink";
import { useTranslation } from 'react-i18next';
import BaseText from "../text/BaseText";
import BaseIcon from "../icons/BaseIcon";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border px-4 py-3 text-sm text-center bg-footer text-foreground">
      <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <BaseText fontSize="sm" color="text-white">
          {t("footer.copy", { year: new Date().getFullYear() })}
        </BaseText>

        <div className="flex flex-wrap justify-center gap-4">
          <BaseLink href="https://github.com/rafaelgalazzi" underline={false} target="_blank">
            <BaseIcon name="github" size={25} circle />
          </BaseLink>
          <BaseLink href="https://www.linkedin.com/in/rafael-galazzi-786487130/" underline={false} target="_blank">
            <BaseIcon name="linkedin" size={25}  bgColor="linkedin" color="white" fill="white" circle/>
          </BaseLink>
          <BaseLink href="mailto:rafaelgalazzi@ucl.br" underline={false} >
            <BaseIcon name="mail" size={25} circle/>
          </BaseLink>
        </div>
      </div>
    </footer>
  );
}

