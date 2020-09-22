import React from 'react'
import {Wrapper} from './InitialStyles'
import {ResultsList} from './ResultsList'

interface InputProps {
    inputs: Array<Input>
    Score: number
}

export const InitialList: React.FC<InputProps>= ({inputs, Score}) => {
    return (
       <Wrapper>
        <ul>
            <h2 style={{color: "White"}}>Score:</h2>
            {inputs.map(input => {
                return <ResultsList key={input.text} input={input} Score={Score} />
            })}
        </ul>
        </Wrapper>
    )
}