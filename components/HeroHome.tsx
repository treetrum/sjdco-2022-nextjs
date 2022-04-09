import Link from "next/link";
import React, { FC, ReactNode } from "react";

import { useWindowHeight } from "../utils/useWindowHeight";
import { ParallaxIcons } from "./ParallaxIcons";
import { ParallaxLetters } from "./ParallaxLetters";

interface Props {
    title: string;
    content: ReactNode;
    ctaLabel: string;
    anchorLabel: string;
}

const HeroHome: FC<Props> = (props) => {
    const minHeight = useWindowHeight();

    return (
        <header
            className="hero-home"
            style={{
                minHeight: minHeight ? `${minHeight}px` : `100vh`,
            }}
        >
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
        </header>
    );
};

export default HeroHome;
