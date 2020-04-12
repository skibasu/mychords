import React from "react";

const Button = ({ onClickHandler, text, className }) => {
    const disabled = className === 'disabled' ? true : false;
    return (
        <button className={`btn ${className}`} onClick={onClickHandler} disabled={disabled} >
            {text}
        </button>
    );
};

export default Button;
