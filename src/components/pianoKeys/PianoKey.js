import React from 'react';
import './pianoKeys.scss';

const PianoKey = ({ value, setAnswer, index, answerObj }) => {
    const isClicked = answerObj[value + index][1];
    const myclassName = value.length === 2 ? `blackKey ${isClicked ? 'active' : ''}` : `whiteKey ${isClicked ? 'active' : ''} `;

    return (
        <button className={myclassName} onClick={() => { !isClicked ? setAnswer(value, value, index) : setAnswer(value, '', index) }}></ button >
    )
}

export default PianoKey;