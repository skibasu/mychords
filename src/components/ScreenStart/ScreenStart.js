import React from "react";
import GameForm from "../GameForm/GameForm";

const ScreenStart = () => {
    return (
        <div className="contentModule__screen contentModule__screen--start">
            <h2 className="contentModule__title">Choose chords type :</h2>
            <GameForm />
        </div>
    );
};

export default ScreenStart;
