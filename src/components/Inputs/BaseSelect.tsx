'use client';

import { useState } from 'react';
import BaseDropdown from '../menus/BaseDropdown';
import BaseIcon from '../icons/BaseIcon';
import BaseText from '../text/BaseText';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export default function BaseSelect({ label, value, options, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find(opt => opt.value === value);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-foreground">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}

      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="px-3 py-2 border border-border bg-dropdown text-left rounded-md flex justify-between items-center gap-2 w-full"
      >
        <span className="truncate">{selected?.label || 'Selecionar'}</span>
        <BaseIcon name="chevron-down" size={18} />
      </button>

      <BaseDropdown isOpen={open} onClickOutside={() => setOpen(false)}>
        <ul className="flex flex-col text-sm">
          {options.map(option => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => handleSelect(option.value)}
                className="w-full text-left py-2 px-2 rounded hover:bg-dropdown-hover transition"
              >
                <BaseText justify="center">{option.label}</BaseText>
              </button>
            </li>
          ))}
        </ul>
      </BaseDropdown>
    </div>
  );
}
