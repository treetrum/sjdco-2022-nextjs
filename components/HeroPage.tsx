import * as React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import * as Colors from "../constants/Colors";
import Container from "./atoms/Container";
import { ParallaxIcons } from "./ParallaxIcons";
import { useWindowHeight } from "../utils/useWindowHeight";

const Outer = styled.header`
    display: flex;
    position: relative;
    align-items: center;
    padding: 175px 0 75px;
    color: $white;
    overflow: hidden;

    background-image: radial-gradient(${lighten(0.02, Colors.background)}, ${darken(0.02, Colors.background)});
`;

const Title = styled.h1`
    display: block;
    font-size: 43px;
    margin-bottom: 24px;
    color: ${Colors.white};
    text-align: center;
`;

interface PropsType {
    title: string;
    align?: "left" | "center" | "right";
    fullHeight?: boolean;
}

export const HeroPage: React.FC<PropsType> = ({ title, align, fullHeight = false }) => {
    const windowHeight = useWindowHeight();

    return (
        <Outer style={fullHeight ? { height: windowHeight ? `${windowHeight}px` : "100vh" } : undefined}>
            <ParallaxIcons />
            <Container>
                <Title style={{ textAlign: align }}>{title}</Title>
            </Container>
        </Outer>
    );
};
