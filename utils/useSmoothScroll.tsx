import { useEffect } from "react";

const useSmoothScroll = () => {
    useEffect(() => {
        let scroller: SmoothScroll;
        import("smooth-scroll").then((SmoothScroll) => {
            scroller = new SmoothScroll.default('a[href*="#"]', {
                speed: 500,
            });
        });
        return () => {
            if (scroller) {
                scroller.destroy();
            }
        };
    }, []);
};

export default useSmoothScroll;
