import Image from "next/image";
import React, { useRef } from "react";
import { useParallax } from "../../utils/useParallax";

import {
    ApertureIcon,
    CheckboxIcon,
    CommandIcon,
    CPUIcon,
    CubeIcon,
    HeadphonesIcons,
    LightningBolt,
    MapPin,
    MusicalNoteIcon,
    PulseIcon,
} from "./icons";

export const ParallaxIcons = () => {
    const iconsRef = useRef<HTMLDivElement>(null);
    useParallax(iconsRef);

    return (
        <div className="parallax-icons" ref={iconsRef}>
            <div className="layer" data-depth="0.2">
                <ApertureIcon />
            </div>
            <div className="layer" data-depth="0.4">
                <CheckboxIcon />
            </div>
            <div className="layer" data-depth="0.6">
                <CommandIcon />
            </div>
            <div className="layer" data-depth="0.2">
                <CPUIcon />
            </div>
            <div className="layer" data-depth="0.4">
                <CubeIcon />
            </div>
            <div className="layer" data-depth="0.6">
                <HeadphonesIcons />
            </div>
            <div className="layer" data-depth="0.2">
                <LightningBolt />
            </div>
            <div className="layer" data-depth="0.4">
                <MapPin />
            </div>
            <div className="layer" data-depth="0.6">
                <MusicalNoteIcon />
            </div>
            <div className="layer" data-depth="0.2">
                <PulseIcon />
            </div>
        </div>
    );
};
