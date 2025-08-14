'use client';

import BaseText from '../text/BaseText';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BaseButton({ children, onClick }: BaseButtonProps) {
  return (
    <button
      className="font-bold py-2 px-4 rounded border border-button bg-button cursor-pointer hover:opacity-70 min-w-[100px]"
      onClick={onClick}
    >
      <BaseText fontSize="md" color="button-foreground" justify="center">
        {children}
      </BaseText>
    </button>
  );
}
