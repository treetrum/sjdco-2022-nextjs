import { useState, useEffect } from "react";
import { isTouch } from "./isTouch";

/*
 * Returns the up to date window.innerHeight. If on a touch device - window.innerHeight
 * is only calculated one, on desktop this is calculated on window.resize
 */
export const useWindowHeight = () => {
    const [height, setHeight] = useState<number | null>();

    useEffect(() => {
        const handleWindowResize = () => {
            setHeight(window.innerHeight);
        };
        if (!isTouch) {
            window.requestAnimationFrame(handleWindowResize);
            window.addEventListener("resize", handleWindowResize);
        }
        return () => {
            if (!isTouch) {
                window.removeEventListener("resize", handleWindowResize);
            }
        };
    }, []);

    return height;
};
