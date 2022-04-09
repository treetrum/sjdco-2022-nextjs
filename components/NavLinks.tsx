import * as React from "react";

import NavLink, { LinkType } from "./NavLink";

export const NavLinks = () => {
    const links: LinkType[] = [
        {
            title: "My Work",
            url: "/",
            type: "internal",
        },
        {
            title: "About / Contact",
            url: "/about",
            type: "internal",
        },
    ];
    return (
        <>
            {links.map((link) => (
                <NavLink key={link.url} link={link}></NavLink>
            ))}
        </>
    );
};
