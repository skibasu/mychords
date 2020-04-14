import React, { useState } from "react";
import Button from '../Button/Button';
import PianoKey from '../pianoKeys/PianoKey';
import Summary from '../Summary/Summary';
import { sheets } from '../../utils/sheets';
import './Game.scss';


const Game = ({ chords, setGameObj }) => {

    let answerArr = [];
    const [message, setMessage] = useState('');
    const [{ tryes, correct, workOn }, setSummary] = useState({
        tryes: 0,
        correct: 0,
        workOn: []
    })

    const onClickHandler = val => {
        setSummary(state => ({ ...state, tryes: tryes + 1 }));
        if (answerArr.join() === chords[0].notes.join()) {
            setMessage(null);
            setSummary(state => ({ ...state, correct: correct + 1 }));
            setGameObj(state => ({ ...state, myChords: chords.filter(v => v.name !== val) }))

        } else {
            setMessage('Try again');
            answerArr = [];
            setSummary(state => ({ ...state, workOn: [...state.workOn, val] }));
        }

    }
    const onClickBack = () => setGameObj(state => ({ ...state, isGame: false }))

    const { hash, flats } = sheets;

    const setAnswer = val => { answerArr.push(val); console.log(answerArr) };

    return (
        <>
            {message && <div className="message">{message}</div>}
            <div className="chord">
                {chords.length > 0 ? < span key={chords[0].name + new Date()}>{chords[0].name}</span> : <Summary tryes={tryes} correct={correct} workOn={workOn} />}
            </div>
            <Button onClickHandler={() => chords.length > 0 ? onClickHandler(chords[0].name) : onClickBack()} text="Okej" className="answer" />
            <div className="keyboard">
                {chords.length > 0 && chords[0].type === 'hash' && hash.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} />)}
                {chords.length > 0 && chords[0].type === 'flats' && flats.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} />)}

            </div>
        </>
    );
};

export default Game;
