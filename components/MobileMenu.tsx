import * as React from "react";
import Context from "./Context";
import { NavLinks } from "./NavLinks";

export const MobileMenu = () => {
    const { mobileMenuOpen } = React.useContext(Context);
    return (
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
            <div className="container">
                <nav className="links">
                    <NavLinks></NavLinks>
                </nav>
            </div>
        </div>
    );
};
