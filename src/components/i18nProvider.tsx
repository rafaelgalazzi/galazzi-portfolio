'use client';

import '@/i18n'; // inicialização
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.on('initialized', () => setReady(true));
    }
  }, [i18n]);

  if (!ready) return null; // ou <Loading />

  return <>{children}</>;
}
