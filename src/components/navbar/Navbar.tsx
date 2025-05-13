import BaseLink from "../link/BaseLink";

export default function Navibar() {
    const links = [
        {
            name: 'Home',
            href: '/home'
        }, 
        {
            name: 'Projects',
            href: '/projects'
        }, 
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Contact',
            href: '/contact'
        }
    ]




    return (
        <>
            <div className="flex flex-row justify-between lg:w-1/3 md:w-1/2 w-full">
                { links.map((link) => (
                    <BaseLink key={link.name} href={link.href} >{link.name}</BaseLink>
                )) }
            </div>
        </>
    );
}