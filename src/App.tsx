import React, {useState, ChangeEvent, FormEvent} from 'react'
import QuestionCard from './components/QuestionCard'
import {fetchQuizQuestions} from './API'

//types
import {QuestionState} from './API'

import {Difficulty} from './API'

//styles
import {GlobalStyle} from './App.styles'
import {Wrapper} from './App.styles'
import { InputForm } from './components/InputForm'
import { ResultsList } from './components/Results'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
  
}

type Input = {
  text: string
}

interface InitialList {
  input: Input;
}

const inputInput: Array<Input> =
  [{text: "AB"}]

// type InputObject = {
//   input: string;
// }
const TOTAL_QUESTIONS = 10;

const App = ()=>{
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers]= useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)
  const [inputs, setInputs] = useState(inputInput)
  // const [initialInput, setInitialInput] = useState("");
  const renderInput = () => {
    const newInput = inputs.map(input => {
      return {...input}
    });
    setInputs(newInput)
  }

  const addInput: AddInput = newInput => {
    setInputs([...inputs, {text: newInput}])
  }
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInitialInput(e.target.value)
  // }

  // const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  // }

  // const addInitials = newInput => {
    
  // }

    const startTrivia = async ()=> {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );
        
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
     

   }



   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver){
      const answer = e.currentTarget.value;
      //check answer afainst correct

      const correct = questions[number].correct_answer === answer;
      //add acore if answer is correct
      if (correct) setScore(prev => prev +1)

      //save answer in array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers(prev => [...prev, answerObject])
    }
   }

   const nextQuestion = ()=> {
     //move onto next q if not last q
     const nextQuestion = number +1

     if (nextQuestion === TOTAL_QUESTIONS){
       setGameOver(true);

     } else {
       setNumber(nextQuestion)
     }

   }

return(
  <>
  <GlobalStyle />
  <Wrapper>
    <div className='App'>
        <h1>REACT Typescript Quiz</h1>
        {gameOver || userAnswers.length == TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
        Start
        </button>
           
        ): null}
 { userAnswers.length == TOTAL_QUESTIONS ? (
   <InputForm  addInput={addInput} />

    ): null}
          {/* if not game over, show score, otherwise null */}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        
        {/* if loading then display */}
        {loading && <p>Loading Questions .... </p>}

          {/* if game is not loading and is not over, display this */}
        {!loading && !gameOver && (
        <QuestionCard 
        questionNr={number +1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
         />
         )}
  {!gameOver && !loading && userAnswers.length === number +1 && number !== TOTAL_QUESTIONS -1 ? (
        <button className='next' 
        onClick={nextQuestion}
        >
          Next Question
        </button>
         ): null }
      <ResultsList input={inputs[0]} Score={score}/>
    </div>
    </Wrapper>
    </>
)
   
}

export default App