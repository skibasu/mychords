import React, { useState } from "react";
import Button from "../Button/Button";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import Game from "../Game/Game";
import { excercises, sheets } from "../../utils/sheets";
import { chords } from "../../utils/chordsGenerators";
import { shuffleChords } from '../../utils/suffleChords';
import "./GameForm.scss";

const GameForm = () => {
    const values = {};

    Object.keys(excercises).forEach(val => (values[val] = false));

    const [chordsTypes, setChordsTypes] = useState(values);
    const [{ isGame, myChords }, setGameObj] = useState({
        isGame: false,
        myChords: []
    });

    const onChangeHandler = name => setChordsTypes(myChords => ({ ...myChords, [name]: !myChords[name] }));



    const onClickHandler = () => {
        let stateChords = [];

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
        setGameObj(() => ({
            isGame: true,
            myChords: shuffleChords(stateChords)
        }));
    };

    return (
        <>
            <h2 className="contentModule__title">{!isGame ? 'Choose chords types:' : 'What are correct notes'}</h2>
            <div className="GameForm">
                {!isGame && Object.keys(excercises).map((val, key) => (
                    <InputCheckbox
                        key={val + key}
                        name={excercises[val].name}
                        isChecked={chordsTypes[val]}
                        onChangeHandler={() => onChangeHandler(val)}
                    />
                ))}

                {!isGame && <div className="GameForm__btn-wrapper">
                    <Button
                        onClickHandler={onClickHandler}
                        text="Start"
                        className={
                            Object.values(chordsTypes).filter(val => val).length
                                ? ""
                                : "disabled"
                        }
                    />
                </div>}
                {isGame &&
                    <div className="GameArea">
                        <Game chords={myChords} setGameObj={setGameObj} />
                    </div>
                }
            </div>
        </>
    );
};

export default GameForm;
