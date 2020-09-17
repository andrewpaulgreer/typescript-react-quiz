import React from 'react'

interface InputProps {
input: Input
Score: number
}

export const ResultsList: React.FC<InputProps> = ({input, Score})=> {
    return (
        <div className="leaderboard">
         <h2 style={{color: "White"}}>High Scores:</h2>
    <ul id="score-list">{input} </ul>
         </div>
    
    )
}