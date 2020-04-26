import React from "react";
import './Footer.scss';

const Footer = () => {
    const y = new Date().getFullYear();
    return <footer className="Footer">
        <p className="Footer__copyrights">{`My Chords ${y} by `} <a className="Footer__link" href="mailto:skibasu@gmail.com">Witalis</a></p>
    </footer>;
};

export default Footer;
