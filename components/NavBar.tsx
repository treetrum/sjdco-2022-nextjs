import Link from "next/link";
import * as React from "react";

import Context from "./Context";
import { NavLinks } from "./NavLinks";

import logo from "../assets/images/logos/sd-logo.svg";

export const NavBar = () => {
    const { toggleMobileMenu, mobileMenuOpen } = React.useContext(Context);
    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-items">
                    <div className="navbar-item logo">
                        <Link passHref href="/">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={logo.src} alt="" />
                        </Link>
                    </div>
                    <nav className="navbar-item menu">
                        <NavLinks />
                    </nav>
                    <div className="navbar-item hamburger">
                        <button
                            aria-label="Menu"
                            style={{ background: "none", border: 0 }}
                            type="button"
                            onClick={() => {
                                toggleMobileMenu();
                            }}
                            className={`animated-hamburger ${mobileMenuOpen ? "active" : ""}`}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
