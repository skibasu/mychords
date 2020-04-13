import React from 'react';
import './pianoKeys.scss';

const PianoKey = ({ notes, type, value, setAnswer }) => {
    const className = value.length === 2 ? 'blackKey' : 'whiteKey';
    return (
        <button className={className} onClick={() => setAnswer(value)}></button>
    )
}

export default PianoKey;