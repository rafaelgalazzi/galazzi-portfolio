interface BaseItemCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseItemCard({ children, className = '' }: BaseItemCardProps) {
  return (
    <div
      className={`rounded-xl bg-dropdown p-5 shadow hover:shadow-lg border-border border border-opacity-20 hover:opacity-80 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
