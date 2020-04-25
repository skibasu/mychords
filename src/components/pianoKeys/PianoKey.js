import React, { useState } from 'react';
import './pianoKeys.scss';

const PianoKey = ({ value, setAnswer, answerArr }) => {
    const [isClicked, setClicked] = useState(false);
    const myclassName = value.length === 2 ? `blackKey ${isClicked ? 'active' : ''}` : `whiteKey ${isClicked ? 'active' : ''}`;
    let val = !isClicked ? value : null;

    return (

        <button className={myclassName} onClick={() => { if (val) { setAnswer(val); setClicked(!isClicked) } else { setAnswer(...answerArr.filter(v => v !== value)); setClicked(!isClicked) } }}></ button >
    )
}

export default PianoKey;