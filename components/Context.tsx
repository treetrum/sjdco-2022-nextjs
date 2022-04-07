import React, { FC, useState } from "react";

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

    const toggleMobileMenu = (override?: boolean) => {
        if (typeof override !== "undefined") {
            setMobileMenuOpen(override);
        } else {
            setMobileMenuOpen((old) => !old);
        }
    };

    const api = {
        mobileMenuOpen,
        toggleMobileMenu,
    };

    console.log(api);

    return <ThemeContext.Provider value={api}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContext;

export { ThemeProvider };
