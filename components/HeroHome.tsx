import Link from "next/link";
import { darken, lighten } from "polished";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../constants/Colors";

import { useWindowHeight } from "../utils/useWindowHeight";
import { ParallaxIcons } from "./ParallaxIcons";
import { ParallaxLetters } from "./ParallaxLetters";

interface Props {
    title: string;
    content: ReactNode;
    ctaLabel: string;
    anchorLabel: string;
}

const Header = styled.header`
    --safe-bottom: env(safe-area-inset-bottom);

    background-size: cover;
    background-position: center;
    display: flex;
    position: relative;
    align-items: center;
    background-image: radial-gradient(${lighten(0.025, Colors.background)}, ${darken(0.025, Colors.background)});
    overflow: hidden;
    min-height: calc(100vh - var(--safe-bottom));
    min-height: -webkit-fill-available;
`;

const HeroHome: FC<Props> = (props) => {
    return (
        <Header className="hero-home">
            <ParallaxIcons />
            <ParallaxLetters />
            <div className="container">
                <h1 className="site-title">{props.title}</h1>
                <div className="subtitle">{props.content}</div>
                <p className="buttons">
                    <Link href={"/about"}>
                        <a className="button-green">{props.ctaLabel}</a>
                    </Link>
                </p>
            </div>
            <div className="more-link">
                <a href="#my-work">{props.anchorLabel}</a>
            </div>
        </Header>
    );
};

export default HeroHome;
