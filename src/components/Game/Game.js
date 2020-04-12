import React from "react";
import Button from '../Button/Button';

const Game = ({ chords, setGameObj }) => {
    console.log(chords);

    const onClickHandler = val => setGameObj(state => ({ ...state, myChords: chords.filter(v => v.name !== val) }))
    const onClickBack = () => setGameObj(state => ({ ...state, isGame: false }))

    const index = Math.floor(Math.random() * chords.length);
    return (
        <>
            <div className="Game">
                {chords.length > 0 ? < span key={chords[index].name}>{chords[index].name + ", "}</span> : <h2>KONIEC</h2>}
            </div>
            <Button onClickHandler={() => chords.length > 0 ? onClickHandler(chords[index].name) : onClickBack()} text="Okej" className="answer" />
        </>
    );
};

export default Game;
