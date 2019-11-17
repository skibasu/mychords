import React, { useState } from "react";
import Button from "../Button/Button";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import { excercises, sheets } from "../../utils/sheets";
import { chords } from "../../utils/chords-generators";
import "./GameForm.scss";

const GameForm = () => {
    const values = {};

    Object.keys(excercises).forEach(val => (values[val] = false));

    const [chordsTypes, setChordsTypes] = useState(values);

    const onChangeHandler = name => {
        setChordsTypes(e => {
            return { ...e, [name]: !e[name] };
        });
    };

    const onClickHandler = () => {
        console.log(chordsTypes.minorTriads, chordsTypes.majorTriads);

        if (chordsTypes.minorTriads) {
            const minorTriads = {
                minorTriads: chords(sheets, { chordType: "minor" })
            };

            console.log("click", chords(sheets, { chordType: "minor" }));
        }

        if (chordsTypes.majorTriads) {
            console.log("click", chords(sheets, { chordType: "major" }));
        }
    };

    return (
        <div className="GameForm">
            {Object.keys(excercises).map((val, key) => (
                <InputCheckbox
                    key={val + key}
                    name={excercises[val].name}
                    isChecked={chordsTypes[val]}
                    onChangeHandler={() => onChangeHandler(val)}
                />
            ))}
            <div className="chordView"></div>
            <div className="GameForm__btn-wrapper">
                <Button
                    onClickHandler={onClickHandler}
                    text="Start"
                    className="main__btn"
                />
            </div>
        </div>
    );
};

export default GameForm;
