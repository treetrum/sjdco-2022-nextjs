import * as React from "react";
import Link from "next/link";

interface StandardLink {
    type: "standard";
    page: {
        url: string;
        title: string;
    };
}

interface CustomLink {
    type: "custom";
    custom_link: {
        link: string;
        new_tab: boolean;
        title: string;
    };
}

export interface MenuLinkProps {
    link: StandardLink | CustomLink;
}

const MenuLink: React.FC<MenuLinkProps> = ({ link }) => {
    switch (link.type) {
        case "standard":
            return (
                <li>
                    <Link href={link.page.url}>{link.page.title}</Link>
                </li>
            );
        case "custom":
            return (
                <li>
                    <a
                        href={link.custom_link.link}
                        target={link.custom_link.new_tab ? "_blank" : "_self"}
                        rel={"noreferrer noopener"}
                    >
                        {link.custom_link.title}
                    </a>
                </li>
            );
    }
};

export default MenuLink;
