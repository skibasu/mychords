import React from "react";
import pageLogo from "../../assets/images/logo/logo.png";
import menu from "../../assets/images/icons/menu.svg";

const header = () => {
    return (
        <header className="header">
            <div className="page-logo">
                <a href="/">
                    <img src={pageLogo} alt="My Chords" />
                </a>
            </div>
            <div className="page-hamburger">
                <button>
                    <img src={menu} alt="page menu" />
                </button>
            </div>
        </header>
    );
};

export default header;
