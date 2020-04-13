import React, { useState } from "react";
import Button from '../Button/Button';
import PianoKey from '../pianoKeys/PianoKey';
import { sheets } from '../../utils/sheets';
import './Game.scss';

let number = Math.random();
console.log(number)

const Game = ({ chords, setGameObj }) => {

    let index = Math.floor(number * chords.length);
    let answerArr = [];
    const [message, setMessage] = useState('');

    const onClickHandler = val => {
        if (answerArr.join() === chords[index].notes.join()) {
            setGameObj(state => ({ ...state, myChords: chords.filter(v => v.name !== val) }))
            setMessage('Dobrze');
            index = Math.floor(Math.random() * chords.length);
            console.log(index)
        } else {
            setGameObj(state => ({ ...state, myChords: chords.filter(v => v.name !== val) }))
            setMessage('Dobrze');
            index = Math.floor(Math.random() * chords.length);
            console.log(index)
            setMessage('Żle');
            answerArr = [];
        }

    }
    const onClickBack = () => setGameObj(state => ({ ...state, isGame: false }))

    const { hash, flats } = sheets;

    const setAnswer = val => { answerArr.push(val); console.log(answerArr) };

    return (
        <>
            {message && <div className="message">{message}</div>}
            <div className="chord">
                {chords.length > 0 ? < span key={chords[index].name}>{chords[index].name}</span> : <h2>KONIEC</h2>}
            </div>
            <Button onClickHandler={() => chords.length > 0 ? onClickHandler(chords[index].name) : onClickBack()} text="Okej" className="answer" />
            <div className="keyboard">
                {chords.length > 0 && chords[index].type === 'hash' && hash.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} />)}
                {chords.length > 0 && chords[index].type === 'flats' && flats.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} />)}

            </div>
        </>
    );
};

export default Game;
