import React, { useState } from "react";
import GameForm from "../GameForm/GameForm";
import Game from "../Game/Game";
import { excercises, sheets } from "../../utils/sheets";
import { chords } from "../../utils/chordsGenerators";
import { shuffleChords } from '../../utils/suffleChords';

const ScreenStart = () => {

    const values = {};
    Object.keys(excercises).forEach(val => (values[val] = false));

    const [chordsTypes, setChordsTypes] = useState(values);
    const [{ isGame, myChords }, setGameObj] = useState({
        isGame: false,
        myChords: []
    });


    const setChords = name => setChordsTypes(myChords => ({ ...myChords, [name]: !myChords[name] }));
    const startGame = () => {
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
        <div className="ContentModule__screen ContentModule__screen--start">
            {
                !isGame
                    ? <GameForm excercises={excercises} chordsTypes={chordsTypes} setChords={setChords} startGame={startGame} />
                    : <Game chords={myChords} setGameObj={setGameObj} />
            }
        </div>
    );
};

export default ScreenStart;
