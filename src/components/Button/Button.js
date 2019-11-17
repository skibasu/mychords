import React from "react";

const Button = ({ onClickHandler, text, className }) => {
    return (
        <button className={`btn ${className}`} onClick={onClickHandler}>
            {text}
        </button>
    );
};

export default Button;
