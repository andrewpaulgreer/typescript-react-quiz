import React from 'react'

interface InputProps {
input: Input
Score: number
}

export const ResultsList: React.FC<InputProps> = ({input, Score})=> {
    return (
        <div className="leaderboard">
         <h2 style={{color: "White"}}>Score:</h2>
    <span><ul>{input.text}</ul><ul id="score-list">{Score} </ul></span>
         </div>
    
    )
}