import React from "react";
import PropTypes from "prop-types";

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

InputCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
};

export default InputCheckbox;
