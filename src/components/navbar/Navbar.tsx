'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../buttons/LanguageSwitcher';
import BaseLink from '../link/BaseLink';
import BaseIcon from '../icons/BaseIcon';
import BaseDropdown from '../menus/BaseDropdown';
import { toggleTheme, initTheme } from '../../lib/toggleTheme';

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    initTheme();
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');
  };

  const links = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="w-full px-4 py-4 border-b border-border bg-navbar text-foreground relative z-50">
      <div className="flex items-center justify-between w-full">
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Abrir menu"
          >
            <BaseIcon name={menuOpen ? 'x' : 'list'} size={24} />
          </button>
        </div>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-6 text-sm font-medium items-center">
            {links.map((link) => (
              <li key={link.href}>
                <BaseLink href={link.href}>{link.name}</BaseLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end flex-1 gap-4">
          <button
            onClick={handleThemeToggle}
            aria-label="Change theme"
            className="text-foreground cursor-pointer hover:text-accent transition-colors"
          >
            <BaseIcon name={theme === 'light' ? 'moon' : 'sun'} size={20} circle/>
          </button>
          <LanguageSwitcher />
        </div>
      </div>

      <BaseDropdown isOpen={menuOpen} onClickOutside={() => setMenuOpen(false)}>
        <ul className="flex flex-col gap-4 text-sm font-medium lg:hidden">
          {links.map((link) => (
            <li key={link.href} onClick={() => setMenuOpen(false)}>
              <BaseLink href={link.href}>{link.name}</BaseLink>
            </li>
          ))}
        </ul>
      </BaseDropdown>
    </nav>
  );
}
