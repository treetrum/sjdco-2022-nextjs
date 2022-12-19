import * as React from "react";
import styled from "styled-components";
import SocialLink, { LinkProps } from "./atoms/SocialLink";

interface SocialLinksProps {
    links: LinkProps[];
}

const Outer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
    return (
        <Outer>
            {props.links.map((link) => (
                <SocialLink {...link} key={link.link} />
            ))}
        </Outer>
    );
};

export default SocialLinks;
