'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../buttons/LanguageSwitcher';
import BaseLink from '../link/BaseLink';
import BaseIcon from '../icons/BaseIcon';
import BaseDropdown from '../menus/BaseDropdown';

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="w-full px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 relative z-50">
      <div className="flex items-center justify-between w-full">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Abrir menu"
          >
            <BaseIcon name={menuOpen ? 'x' : 'list'} size={24} />
          </button>
        </div>

        {/* Central Links (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-6 text-sm font-medium items-center">
            {links.map((link) => (
              <li key={link.href}>
                <BaseLink href={link.href}>{link.name}</BaseLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Language Switcher */}
        <div className="flex justify-end flex-1">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Dropdown menu (Mobile) */}
      <BaseDropdown 
        isOpen={menuOpen}
        onClickOutside={() => setMenuOpen(false)}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <BaseLink href={link.href}>{link.name}</BaseLink>
            </li>
          ))}
        </ul>
      </BaseDropdown>
    </nav>
  );
}
