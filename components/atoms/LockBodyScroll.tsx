import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { FC, RefObject } from "react";

const LockBodyScroll: FC<{ scrollingRef: RefObject<HTMLElement> }> = ({ scrollingRef }) => {
    React.useEffect(() => {
        const ref = scrollingRef.current;
        if (ref) {
            disableBodyScroll(ref);
        }

        return () => {
            if (ref) {
                enableBodyScroll(ref);
            }
        };
    }, [scrollingRef]);

    return null;
};

export default LockBodyScroll;
