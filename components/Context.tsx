import React, { FC, useCallback, useContext, useState } from "react";

interface ContextType {
    mobileMenuOpen: boolean;
    toggleMobileMenu: (override?: boolean) => void;
}

const ThemeContext = React.createContext<ContextType>({
    mobileMenuOpen: false,
    toggleMobileMenu: () => {},
});

const ThemeProvider: FC = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(
        (override?: boolean) => {
            if (typeof override !== "undefined") {
                setMobileMenuOpen(override);
            } else {
                setMobileMenuOpen((old) => !old);
            }
        },
        [setMobileMenuOpen]
    );

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
    }, [setMobileMenuOpen]);

    const openMobileMenu = useCallback(() => {
        setMobileMenuOpen(true);
    }, [setMobileMenuOpen]);

    const api = {
        mobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        openMobileMenu,
    };

    return <ThemeContext.Provider value={api}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContext;

export { ThemeProvider };

export const useAppContext = () => {
    return useContext(ThemeContext);
};
