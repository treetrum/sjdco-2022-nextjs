import * as React from "react";
import { useParallax } from "../utils/useParallax";
import Image from "next/image";

import SSVG from "../assets/images/logos/S.svg";
import DSVG from "../assets/images/logos/D.svg";
import { SLogo } from "./SLogo";
import { DLogo } from "./DLogo";

export const ParallaxLetters = () => {
    const letteresRef = React.useRef<HTMLDivElement>(null);
    useParallax(letteresRef);
    return (
        <div className="parallax-letters" ref={letteresRef}>
            <div className="layer s" data-depth="0.1">
                <SLogo />
            </div>
            <div className="layer d" data-depth="0.1">
                <DLogo />
            </div>
        </div>
    );
};
