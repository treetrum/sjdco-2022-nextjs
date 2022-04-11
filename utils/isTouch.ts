import { useEffect, useState } from "react";

export const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

export const useIsTouch = () => {
    const [isTouch, setIsTouch] = useState(false);
    useEffect(() => {
        setIsTouch(typeof window !== "undefined" && "ontouchstart" in window);
    }, []);
    return isTouch;
};
