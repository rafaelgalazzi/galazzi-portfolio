'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../buttons/LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const links = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="w-full py-4 px-6 flex justify-center border-b border-zinc-200 dark:border-zinc-800">
      <ul className="flex gap-20 text-sm font-medium">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition'
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}
