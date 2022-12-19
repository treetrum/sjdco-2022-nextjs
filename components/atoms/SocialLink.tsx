import * as React from "react";
import styled from "styled-components";

import * as Colors from "../../constants/Colors";

export interface LinkProps {
    [key: string]: any;
    icon: string;
    iconSvg?: React.ReactElement;
    link: string;
    rel?: string;
}

const ListItem = styled.li`
    display: block;

    a {
        display: block;
        padding: 1rem;
        color: ${Colors.white};
        font-size: 1.5rem;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }

        img,
        svg {
            display: block;
        }
    }
`;

const SocialLink: React.FC<LinkProps> = ({ icon, link, rel = "", iconSvg, ...props }) => {
    const relEls = ["noreferrer", "noopener"];
    if (rel) {
        relEls.push(rel);
    }
    return (
        <ListItem {...props}>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a aria-label={icon} href={link} target="_blank" rel={relEls.join(" ")}>
                {iconSvg ? iconSvg : <i className={`icon icon-${icon}`} />}
            </a>
        </ListItem>
    );
};

export default SocialLink;
