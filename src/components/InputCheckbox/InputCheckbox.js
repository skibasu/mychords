import React from "react";

const InputCheckbox = ({ name, onChangeHandler, isChecked }) => {
    const addClass = isChecked ? "selected" : "";
    return (
        <div className="GameForm__item">
            <button
                className={`btn btn-chords-select ${addClass}`}
                onClick={onChangeHandler}
            ></button>

            <p className="GameForm__label">{name}</p>
        </div>
    );
};

export default InputCheckbox;
