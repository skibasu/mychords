import React from 'react';

const Summary = ({ correct, tryes, workOn }) => {
    return (
        <div className="summary">
            <p>Tryes: {tryes} / {correct}</p>
            {tryes / correct !== 1 ? <p>You should work on :</p> : <p>Perfect</p>}

            {workOn.filter((val, index) => workOn.indexOf(val) === index).map((val, key) => <p key={val + key}>{val}</p>)}
        </div>
    )
};

export default Summary;