'use client';

import BaseLink from '../link/BaseLink';
import { useTranslation } from 'react-i18next';
import BaseText from '../text/BaseText';
import BaseIcon from '../icons/BaseIcon';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border px-4 py-3 text-sm text-center sticky bottom-0 bg-footer text-foreground">
      <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BaseText fontSize="sm" color="muted">
            {t('footer.copy', { year: new Date().getFullYear() })}
          </BaseText>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <BaseLink href="https://github.com/rafaelgalazzi" underline={false} target="_blank">
              <BaseIcon name="github" size={28} circle className="bg-github" />
            </BaseLink>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <BaseLink href="https://www.linkedin.com/in/rafael-galazzi-786487130/" underline={false} target="_blank">
              <BaseIcon name="linkedin" size={28} bgColor="linkedin" color="white" fill="white" circle />
            </BaseLink>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <BaseLink href="mailto:rafaelgalazzi@hotmail.com" underline={false}>
              <BaseIcon name="mail" size={28} circle />
            </BaseLink>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
