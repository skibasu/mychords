import React, { useState } from "react";
import Button from '../Button/Button';
import PianoKey from '../pianoKeys/PianoKey';
import Summary from '../Summary/Summary';
import { sheets } from '../../utils/sheets';
import { answerObject } from '../../utils/sheets';
import './Game.scss';

const Game = ({ chords, setGameObj }) => {

    const obj = answerObject;
    const [answerObj, setMyAnswerObj] = useState(obj);

    const [message, setMessage] = useState('');
    const [{ tryes, correct, workOn }, setSummary] = useState({
        tryes: 0,
        correct: 0,
        workOn: []
    })

    const onClickHandler = val => {
        setSummary(state => ({ ...state, tryes: tryes + 1 }));
        if (Object.values(answerObj).map((v, key) => v[0]).filter(v => v).join() === chords[0].notes.join()) {
            setMessage(null);
            setMyAnswerObj(obj)
            setSummary(state => ({ ...state, correct: correct + 1 }));
            setGameObj(state => ({ ...state, myChords: chords.filter(v => v.name !== val) }))

        } else {
            setMessage('Try again');
            setMyAnswerObj(obj)
            setSummary(state => ({ ...state, workOn: [...state.workOn, val] }));
        }

    }
    const onClickBack = () => setGameObj(state => ({ ...state, isGame: false }))

    const { hash, flats } = sheets;

    const setAnswerObj = (name, val, i) => { setMyAnswerObj(state => ({ ...state, [name + i]: [val, !state[name + i][1]] })); setMessage('') };

    return (
        <div className="Game">
            {chords.length > 0 ? <h2 className="Game__title">What are correct notes</h2> : <h2 className="Game__title-summary">Summary</h2>}
            <div className="chord">
                {chords.length > 0 ? <span key={chords[0].name + new Date()}>{chords[0].name}</span> : <Summary tryes={tryes} correct={correct} workOn={workOn} />}
            </div>
            {chords.length > 0 &&
                <div className="Game__answer">
                    <span>{!message ? Object.values(answerObj).map(v => v[0]).join(' ') : message}</span>
                </div>
            }
            <Button onClickHandler={() => chords.length > 0 ? onClickHandler(chords[0].name) : onClickBack()} text={chords.length > 0 ? "Send" : "Play Again"} className="btn-answer" />
            <div className="Game__keyboard">
                <div className="keyboard">
                    {chords.length > 0 && chords[0].type === 'hash' && hash.map((val, key) => <PianoKey key={val + new Date()} value={val} index={1} setAnswer={setAnswerObj} answerObj={answerObj} />)}
                    {chords.length > 0 && chords[0].type === 'flats' && flats.map((val, key) => <PianoKey key={val + new Date()} value={val} index={1} setAnswer={setAnswerObj} answerObj={answerObj} />)}
                </div>
                <div className="keyboard">
                    {chords.length > 0 && chords[0].type === 'hash' && hash.map((val, key) => <PianoKey key={val + new Date()} value={val} index={2} setAnswer={setAnswerObj} answerObj={answerObj} />)}
                    {chords.length > 0 && chords[0].type === 'flats' && flats.map((val, key) => <PianoKey key={val + new Date()} value={val} index={2} setAnswer={setAnswerObj} answerObj={answerObj} />)}
                </div>
            </div>
        </div>
    );
};

export default Game;
