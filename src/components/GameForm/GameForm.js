import React, { useState } from "react";
import Button from "../Button/Button";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import Game from "../Game/Game";
import { excercises, sheets } from "../../utils/sheets";
import { chords } from "../../utils/chordsGenerators";
import "./GameForm.scss";

const GameForm = () => {
    const values = {};

    Object.keys(excercises).forEach(val => (values[val] = false));

    const [chordsTypes, setChordsTypes] = useState(values);
    const [{ isGame, myChords }, setGameObj] = useState({
        isGame: false,
        myChords: []
    });

    const onChangeHandler = name => {
        setChordsTypes(e => {
            return { ...e, [name]: !e[name] };
        });
    };

    const onClickHandler = () => {
        let stateChords = [];

        setGameObj({ isGame: true, myChords: [] });
        console.log(myChords);

        if (chordsTypes.minorTriads) {
            stateChords = [
                ...stateChords,
                ...chords(sheets, { chordType: "minor" })[0],
                ...chords(sheets, { chordType: "minor" })[1]
            ];
        }

        if (chordsTypes.majorTriads) {
            stateChords = [
                ...stateChords,
                ...chords(sheets, { chordType: "major" })[0],
                ...chords(sheets, { chordType: "major" })[1]
            ];
        }
        if (chordsTypes.minor7Chords) {
            stateChords = [
                ...stateChords,
                ...chords(sheets, { chordType: "minor7" })[0],
                ...chords(sheets, { chordType: "minor7" })[1]
            ];
        }
        if (chordsTypes.major7Chords) {
            stateChords = [
                ...stateChords,
                ...chords(sheets, { chordType: "major7" })[0],
                ...chords(sheets, { chordType: "major7" })[1]
            ];
        }
        if (chordsTypes.sevenChords) {
            stateChords = [
                ...stateChords,
                ...chords(sheets, { chordType: "seven" })[0],
                ...chords(sheets, { chordType: "seven" })[1]
            ];
        }
        setGameObj(state => ({
            ...state,
            myChords: stateChords
        }));
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

            <div className="GameForm__btn-wrapper">
                <Button
                    onClickHandler={onClickHandler}
                    text="Start"
                    className={
                        Object.values(chordsTypes).filter(val => val).length
                            ? ""
                            : " disabled"
                    }
                />
            </div>

            <div className="GameArea">
                {isGame && <Game chords={myChords} />}
            </div>
        </div>
    );
};

export default GameForm;
