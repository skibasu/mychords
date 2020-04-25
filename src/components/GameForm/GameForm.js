import React from "react";
import Button from "../Button/Button";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import "./GameForm.scss";

const GameForm = ({ excercises, chordsTypes, setChords, startGame }) => {


    return (
        <div className="GameForm">
            <h2 className="GameForm__title">Choose chords types:</h2>

            {Object.keys(excercises).map((val, key) => (
                <InputCheckbox
                    key={val + key}
                    name={excercises[val].name}
                    isChecked={chordsTypes[val]}
                    onChangeHandler={() => setChords(val)}
                />
            ))}

            <div className="GameForm__btn-wrapper">
                <Button
                    onClickHandler={startGame}
                    text="Start"
                    className={
                        Object.values(chordsTypes).filter(val => val).length
                            ? ""
                            : "disabled"
                    }
                />
            </div>
        </div>
    );
};

export default GameForm;
