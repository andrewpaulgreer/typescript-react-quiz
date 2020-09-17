import React from 'react'

import {ResultsList} from './ResultsList'

interface InputProps {
    inputs: Array<Input>
    Score: number
}

export const InitialList: React.FC<InputProps>= ({inputs, Score}) => {
    return (
        <ul>
            {inputs.map(input => {
                return <ResultsList key={input.text} input={input} Score={Score} />
            })}
        </ul>
    )
}