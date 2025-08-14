interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`
        w-full 
        px-4 
        py-3 
        bg-background 
        border 
        border-border 
        rounded-lg 
        focus:ring-2 
        focus:ring-accent 
        focus:border-accent 
        outline-none 
        transition-all 
        duration-300
        text-foreground
        ${className}
      `}
      {...props}
    />
  );
}
