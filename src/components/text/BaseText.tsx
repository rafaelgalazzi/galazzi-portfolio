
interface BaseTextProps {
    children: React.ReactNode,
    justify?: 'left' | 'center' | 'right',
    fontSize?: 'sm' | 'md' | 'lg',
    fontWeight?: 'normal' | 'bold',
    color?: string 
}


export default function BaseText({ children, justify = 'left', fontSize = 'md', fontWeight = 'normal', color= 'text-white' }: BaseTextProps) {
    const fontSizesMap = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-2xl',
    }

    const fontWeightsMap = {
        normal: 'font-weight-400',
        bold: 'font-weight-700'
    }

    const justifyMap = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    }

    return (
        <div className={`${justifyMap[justify]} ${fontSizesMap[fontSize]} ${fontWeightsMap[fontWeight]} text-${color}` }>
            {children}
        </div>
    );
}