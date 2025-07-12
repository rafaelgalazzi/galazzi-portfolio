interface BaseTextProps {
  children: React.ReactNode;
  justify?: 'left' | 'center' | 'right';
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  fontWeight?: 'normal' | 'bold';
  color?: string;
  className?: string
}

export default function BaseText({
  children,
  justify = 'left',
  fontSize = 'md',
  fontWeight = 'normal',
  color = 'text-white',
  className
}: BaseTextProps) {
  const fontSizesMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl',
    xxxl: 'text-3xl'
  };

  const fontWeightsMap = {
    normal: 'font-normal',
    bold: 'font-bold'
  };

  const justifyMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };


  return (
    <div className={`${className} ${justifyMap[justify]} ${fontSizesMap[fontSize]} ${fontWeightsMap[fontWeight]}`} style={{color: `var(--${color})`}}>
      {children}
    </div>
  );
}
