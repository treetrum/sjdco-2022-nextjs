import Link from "next/link";
import React, { FC, ReactNode } from "react";

import { useWindowHeight } from "../utils/useWindowHeight";
import { ParallaxIcons } from "./ParallaxIcons";
import { ParallaxLetters } from "./ParallaxLetters";

const HeroHome: FC<{ title: string; content: ReactNode; ctaLabel: string }> = (props) => {
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
                    <Link href={"/"}>
                        <a className="button-green">{props.ctaLabel}</a>
                    </Link>
                </p>
            </div>
            <div className="more-link">
                <a href="#my-work">Some of my work</a>
            </div>
        </header>
    );
};

export default HeroHome;
