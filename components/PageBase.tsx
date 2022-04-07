import React, { FC, useContext } from "react";
import SiteLoader from "./atoms/SiteLoader";
import { ThemeProvider } from "./Context";
import Footer from "./Footer";
import { MobileMenu } from "./MobileMenu";
import { NavBar } from "./NavBar";
import Context from "./Context";

export const PageBase: FC = (props) => {
    const { toggleMobileMenu } = useContext(Context);

    // Close the mobile menu whenever a link is clicked
    React.useEffect(() => {
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
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

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
