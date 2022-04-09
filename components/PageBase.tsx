import React, { FC, useContext, useEffect, useState } from "react";
import SiteLoader from "./atoms/SiteLoader";
import { ThemeProvider } from "./Context";
import Footer from "./Footer";
import { MobileMenu } from "./MobileMenu";
import { NavBar } from "./NavBar";
import Context from "./Context";
import useSmoothScroll from "../utils/useSmoothScroll";

export const PageBase: FC = (props) => {
    const { toggleMobileMenu } = useContext(Context);

    // Close the mobile menu whenever a link is clicked
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (event.target instanceof HTMLAnchorElement) {
                toggleMobileMenu(false);
            }
        };
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [toggleMobileMenu]);

    // Show the site loader for 1s
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    // Setup smooth scroll
    useSmoothScroll();

    return (
        <ThemeProvider>
            <SiteLoader active={loading} />
            <NavBar />
            <MobileMenu />
            {props.children}
            <Footer />
        </ThemeProvider>
    );
};
