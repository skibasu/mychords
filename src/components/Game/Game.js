import React from "react";

const Game = ({ chords }) => {
    return (
        <div className="Game">
            {chords.map((val, key) => (
                <span key={val.name + key}>{val.name + ", "}</span>
            ))}
        </div>
    );
};

export default Game;
