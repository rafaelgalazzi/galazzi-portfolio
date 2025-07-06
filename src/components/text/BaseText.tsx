
interface BaseTextProps {
    children: React.ReactNode,
    justify?: 'left' | 'center' | 'right',
    fontSize?: 'sm' | 'md' | 'lg',
    fontWeight?: 'normal' | 'bold'
}


export default function BaseText(props: BaseTextProps) {
    const fontSizes = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-2xl',
    }

    const fontWeights = {
        normal: 'font-weight-400',
        bold: 'font-weight-700'
    }

    const justify = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    }

    return (
        <div className={`${justify[props.justify || 'left']} ${fontSizes[props.fontSize || 'md']} ${fontWeights[props.fontWeight || 'normal']}` }>
            {props.children}
        </div>
    );
}