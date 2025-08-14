import { useState } from 'react';

interface BaseContactCardProps {
  link: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BaseContactCard({ link, label, className = '', children }: BaseContactCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div
      className={`
        rounded-xl bg-dropdown p-5 shadow hover:shadow-lg border border-border border-opacity-20
        hover:opacity-80 transition-opacity duration-200
        flex items-center gap-3 cursor-pointer select-none ${className}
      `}
      onClick={handleCopy}
      title="Copiar link"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCopy()}
      style={{ userSelect: 'none' }}
    >
      <div className="flex-1 min-w-0">
        {label && <div className="font-semibold text-[var(--white)] mb-1 truncate">{label}</div>}
        <div className="text-sm text-[var(--muted)] select-all hidden md:block">{link}</div>
        {children}
      </div>
      <span
        className={`
          ml-2 flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)]
          bg-[var(--background)] group-hover:bg-[var(--dropdown-hover)] transition
          pointer-events-none
        `}
        // pointer-events-none garante que o clique sempre vai para o card
      >
        {copied ? (
          // Ícone de check
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 11 8 15 16 6" />
          </svg>
        ) : (
          // Ícone de copiar arquivo (apenas borda)
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="var(--muted)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="7" height="7" rx="2" />
            <path d="M15 9V7A2 2 0 0 0 13 5H7A2 2 0 0 0 5 7v6a2 2 0 0 0 2 2h2" />
          </svg>
        )}
      </span>
    </div>
  );
}
