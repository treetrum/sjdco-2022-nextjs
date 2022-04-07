import React, { useEffect } from "react";
// @ts-ignore
import Parallax from "parallax-js";

export const useParallax = <T extends HTMLElement>(ref: React.RefObject<T>) => {
    useEffect(() => {
        if (ref.current) {
            const instance = new Parallax(ref.current);
            return () => {
                if (instance.destroy) {
                    instance.destroy();
                }
            };
        }
        return () => {};
    }, [ref]);
};
