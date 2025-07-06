'use client';

import BaseLink from "../link/BaseLink";
import { useTranslation } from 'react-i18next';
import BaseText from "../text/BaseText";
import BaseIcon from "../icons/BaseIcon";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border px-4 py-6 text-sm text-center text-muted bg-footer text-foreground">
      <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <BaseText fontSize="sm">
          {t("footer.copy", { year: new Date().getFullYear() })}
        </BaseText>

        <div className="flex flex-wrap justify-center gap-4">
          <BaseLink href="https://github.com/seu-usuario" underline={false}>
            <BaseIcon name="github" size={25} circle/>
          </BaseLink>
          <BaseLink href="https://linkedin.com/in/seu-usuario" underline={false}>
            <BaseIcon name="linkedin" size={25} circle/>
          </BaseLink>
          <BaseLink href="/contact" underline={false}>
            <BaseIcon name="mail" size={25} circle/>
          </BaseLink>
        </div>
      </div>
    </footer>
  );
}
