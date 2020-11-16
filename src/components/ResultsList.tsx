import React from 'react'

interface InputProps {
input: Input
Score: number
}

export const ResultsList: React.FC<InputProps> = ({input, Score})=> {
    return (
        <div className="leaderboard" style={{}}>
         {/* <h2 style={{color: "White"}}>Score:</h2> */}
    <span style={{color: "White", fontSize: '30px', marginTop: '10px',}}><ul>{input.text}</ul><ul id="score-list">{Score} </ul></span>
         </div>
    )
}