import * as React from "react";
import Link from "next/link";

export interface LinkType {
    title: string;
    url: string;
    target?: string;
    type: "internal" | "external";
}

const NavLink: React.FC<{ link: LinkType }> = (props) => {
    const link =
        props.link.type === "external" ? (
            <a target={props.link.target} href={props.link.url}>
                {props.link.title}
            </a>
        ) : (
            <Link href={props.link.url}>
                <a target={props.link.target}>{props.link.title}</a>
            </Link>
        );

    return <li>{link}</li>;
};

export default NavLink;
