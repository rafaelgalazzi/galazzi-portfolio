interface BaseTextProps {
  children: React.ReactNode;
  justify?: 'left' | 'center' | 'right';
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: string;
  className?: string;
  lineHeight?: 'normal' | 'relaxed' | 'loose';
  tracking?: 'normal' | 'tight' | 'wide';
}

export default function BaseText({
  children,
  justify = 'left',
  fontSize = 'md',
  fontWeight = 'normal',
  color = 'text-white',
  className = '',
  lineHeight = 'normal',
  tracking = 'normal'
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
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const justifyMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const lineHeightMap = {
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  };

  const trackingMap = {
    normal: 'tracking-normal',
    tight: 'tracking-tight',
    wide: 'tracking-wide'
  };

  return (
    <div 
      className={`
        ${className} 
        ${justifyMap[justify]} 
        ${fontSizesMap[fontSize]} 
        ${fontWeightsMap[fontWeight]}
        ${lineHeightMap[lineHeight]}
        ${trackingMap[tracking]}
      `} 
      style={{ color: `var(--${color})` }}
    >
      {children}
    </div>
  );
}
