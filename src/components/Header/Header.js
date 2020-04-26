import React from "react";
import pageLogo from "../../assets/images/logo/logo.png";
import './Header.scss'

const header = () => {
    return (
        <header className="Header">
            <div className="page-logo">
                <a href="/">
                    <img src={pageLogo} alt="My Chords" />
                </a>
            </div>
        </header>
    );
};

export default header;
