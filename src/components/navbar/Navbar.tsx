'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../buttons/LanguageSwitcher';
import BaseLink from '../link/BaseLink';
import BaseIcon from '../icons/BaseIcon';
import BaseDropdown from '../menus/BaseDropdown';
import { toggleTheme, initTheme } from '../../lib/toggleTheme';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    initTheme();
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');
  };

  const links = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <motion.nav
      className={`w-full px-4 py-3 border-b border-border bg-navbar text-foreground sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-3'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-dropdown-hover transition-colors"
            aria-label="Abrir menu"
          >
            <BaseIcon name={menuOpen ? 'x' : 'list'} size={24} />
          </motion.button>
        </div>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-8 text-sm font-medium items-center">
            {links.map((link) => (
              <motion.li key={link.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <BaseLink href={link.href}>{link.name}</BaseLink>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end flex-1 gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleThemeToggle}
            aria-label="Change theme"
            className="p-2 rounded-lg text-foreground cursor-pointer hover:bg-dropdown-hover transition-colors"
          >
            <BaseIcon name={theme === 'light' ? 'moon' : 'sun'} size={20} />
          </motion.button>

          <motion.div whileTap={{ scale: 0.9 }}>
            <LanguageSwitcher />
          </motion.div>
        </div>
      </div>

      <BaseDropdown isOpen={menuOpen} onClickOutside={() => setMenuOpen(false)}>
        <ul className="flex flex-col gap-4 text-sm font-medium lg:hidden py-4">
          {links.map((link) => (
            <motion.li
              key={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ x: 5 }}
            >
              <BaseLink href={link.href}>{link.name}</BaseLink>
            </motion.li>
          ))}
        </ul>
      </BaseDropdown>
    </motion.nav>
  );
}
