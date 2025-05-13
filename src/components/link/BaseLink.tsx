import style from './BaseLink.module.css'
import Link from 'next/link';


interface BaseLinkProps {
    children: React.ReactNode
    href: string
}

export default function BaseLink(props: BaseLinkProps) {
    return (
        <div className="p-2">
            <Link href={props.href} className={`${style.linkStyle}`}>{props.children}</Link>
        </div>
    );
}