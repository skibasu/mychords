import React, { useState } from "react";
import Button from '../Button/Button';
import PianoKey from '../pianoKeys/PianoKey';
import Summary from '../Summary/Summary';
import { sheets } from '../../utils/sheets';
import './Game.scss';


const Game = ({ chords, setGameObj }) => {
    const [answerArr, setMyAnswer] = useState([]);
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
            setMyAnswer([]);
            setSummary(state => ({ ...state, correct: correct + 1 }));
            setGameObj(state => ({ ...state, myChords: chords.filter(v => v.name !== val) }))

        } else {
            setMessage('Try again');
            setMyAnswer([]);
            setSummary(state => ({ ...state, workOn: [...state.workOn, val] }));
        }

    }
    const onClickBack = () => setGameObj(state => ({ ...state, isGame: false }))

    const { hash, flats } = sheets;

    const setAnswer = val => { setMyAnswer(state => ([...state, val])); setMessage('') };

    return (
        <div className="Game">
            {chords.length > 0 ? <h2 className="Game__title">What are correct notes</h2> : <h2 className="Game__title-summary">Summary</h2>}
            <div className="chord">
                {chords.length > 0 ? <span key={chords[0].name + new Date()}>{chords[0].name}</span> : <Summary tryes={tryes} correct={correct} workOn={workOn} />}
            </div>
            {chords.length > 0 &&
                <div className="Game__answer">
                    <span>{!message ? answerArr.join(' ') : message}</span>
                </div>
            }
            <Button onClickHandler={() => chords.length > 0 ? onClickHandler(chords[0].name) : onClickBack()} text={chords.length > 0 ? "Send" : "Play Again"} className="btn-answer" />
            <div className="Game__keyboard">
                <div className="keyboard">
                    {chords.length > 0 && chords[0].type === 'hash' && hash.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} answerArr={answerArr} />)}
                    {chords.length > 0 && chords[0].type === 'flats' && flats.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} answerArr={answerArr} />)}
                </div>
                <div className="keyboard">
                    {chords.length > 0 && chords[0].type === 'hash' && hash.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} />)}
                    {chords.length > 0 && chords[0].type === 'flats' && flats.map((val, key) => <PianoKey key={val + key} value={val} setAnswer={setAnswer} />)}
                </div>
            </div>
        </div>
    );
};

export default Game;
