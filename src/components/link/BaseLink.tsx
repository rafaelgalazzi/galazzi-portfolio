import BaseText from '../text/BaseText';
import Link from 'next/link';


interface BaseLinkProps {
    children: React.ReactNode
    href: string
}

export default function BaseLink(props: BaseLinkProps) {
  return (
    <Link href={props.href}>
      <BaseText>
        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">
          {props.children}
        </span>
      </BaseText>
    </Link>
  );
}