import BaseText from '../text/BaseText';
import Link from 'next/link';

interface BaseLinkProps {
  children: React.ReactNode;
  href: string;
  underline?: boolean;
}

export default function BaseLink({ children, href, underline = true }: BaseLinkProps) {
  const underlineClass = underline
    ? "relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
    : '';

  return (
    <Link href={href}>
      <BaseText>
        <span className={underlineClass}>{children}</span>
      </BaseText>
    </Link>
  );
}
