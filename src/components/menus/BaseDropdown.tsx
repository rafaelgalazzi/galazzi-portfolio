'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

interface BaseDropdownProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  onClickOutside?: () => void;
}

export default function BaseDropdown({
  isOpen,
  children,
  className = '',
  onClickOutside,
}: BaseDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClickOutside?.();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClickOutside]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className={`absolute top-full left-0 w-full bg-zinc-50 dark:bg-zinc-900 shadow-md px-4 py-4 z-40 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
