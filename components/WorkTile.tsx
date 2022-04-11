import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import * as Colors from "../constants/Colors";
import * as Queries from "../constants/MediaQueries";
import Image from "next/image";
import { useIsTouch } from "../utils/isTouch";
import { asImageSrc } from "@prismicio/helpers";

const Container = styled.a`
    overflow: hidden;
    box-shadow: 0 5px 10px ${rgba("black", 0.2)};
    color: hsl(0, 0, 25%);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: 500ms ease all;
    position: relative;
    cursor: pointer;
    position: relative;
    padding-bottom: 110%;

    &:hover {
        box-shadow: 0 10px 20px ${rgba("black", 0.2)};
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div<{ isTouch: boolean }>`
    background-color: ${rgba(Colors.background, 0.75)};
    color: white;
    padding: 20px 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    transition: 500ms ease all;

    a:hover & {
        transform: none;
    }

    ${({ isTouch }) =>
        isTouch &&
        css`
            transform: none;

            ${Title} {
                transform: none;
                opacity: 1;
            }
            ${Subtitle} {
                transform: none;
                opacity: 1;
            }
        `}

    ${Queries.md} {
        padding: 25px 30px;
    }
`;

const Title = styled.h4`
    margin: 0 0 5px;
    font-size: 18px;
    color: ${Colors.green};
    transform: translateY(100%);
    opacity: 0;
    transition: 750ms ease all;

    a:hover & {
        opacity: 1;
        transform: none;
    }

    ${Queries.md} {
        font-size: 22px;
    }
`;

const Subtitle = styled.p`
    font-size: 14px;
    margin: 0 0 5px;
    opacity: 0.5;
    line-height: 1.2;
    transform: translateY(100%);
    opacity: 0;
    transition: 750ms 250ms ease all;

    a:hover & {
        opacity: 1;
        transform: none;
    }

    ${Queries.md} {
        font-size: 16px;
    }
`;

interface WorkTileProps {
    onClick: () => void;
    image: any;
    title: string;
    subtitle: string;
}

export const WorkTile: React.FC<WorkTileProps> = (props) => {
    const isTouch = useIsTouch();
    return (
        <Container
            onClick={(event) => {
                event.preventDefault();
                props.onClick();
            }}
        >
            <Image alt="" layout="raw" src={asImageSrc(props.image) ?? ""} width={450} height={500} />
            <Content isTouch={isTouch}>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
            </Content>
        </Container>
    );
};
