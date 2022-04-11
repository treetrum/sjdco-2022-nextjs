import Link from "next/link";
import * as React from "react";
import { useAppContext } from "./Context";

export interface LinkType {
    title: string;
    url: string;
    target?: string;
    type: "internal" | "external";
}

const NavLink: React.FC<{ link: LinkType }> = (props) => {
    const { toggleMobileMenu } = useAppContext();

    const closeMobileMenu = () => toggleMobileMenu(false);

    const link =
        props.link.type === "external" ? (
            <a target={props.link.target} href={props.link.url} onClick={closeMobileMenu}>
                {props.link.title}
            </a>
        ) : (
            <Link href={props.link.url}>
                <a target={props.link.target} onClick={closeMobileMenu}>
                    {props.link.title}
                </a>
            </Link>
        );

    return <li>{link}</li>;
};

export default NavLink;
