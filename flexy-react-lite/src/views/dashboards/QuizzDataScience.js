import React, { useEffect, useState } from "react";
import QuestionsService from "../../service/questionsService";
import './Quizz.css'
import offerService from '../../service/offerService';

import {

  Button

} from "@material-ui/core";
import { useLocation, useNavigate } from 'react-router-dom'

import { Navigate } from "react-router-dom";
export const quiz = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: 'quest1',
      choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'stringify()',
    },
    {
      question: 'QUEST2',
      choices: ['var', 'let', 'var and let', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'var and let',
    },
    {
      question:
        'WQUEST3',
      choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      question: 'How can a datatype be declared to be a constant type?',
      choices: ['const', 'var', 'let', 'constant'],
      type: 'MCQs',
      correctAnswer: 'const',
    },
  ],
}




/* 1 */

const QuizzDataScience = () => {
  // const [id,setid]=useState("")
  // const [quiz, setquiz] = useState([])
  // const[questions,setquestions]=useState([])
  // const[choices,setchoices]=useState([])
  // const [question,setquestion]=useState("")
  // const [correctAnswer,setcorrectAnswer]=useState("")
  // const qz = new QuestionsService()
  var [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const [showResult, setShowResult] = useState(false)
  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [offerID, setofferID] = useState("")
  const [id, setid] = useState("")

  const location = useLocation()
  useEffect(() => {
    setid(location.state.id)
    console.log("****id received is***", location.state.id)
  }, [])

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,

        }
        :
        { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (result) {
      localStorage.setItem('totalScore', result.score)
      console.log("total score is", result.score)

    }
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)

      setActiveQuestion(activeQuestion + 1)
      console.log("***activequestion", activeQuestion)
    }
    else {
      setActiveQuestion(0)

      setShowResult(true)

    }
  }
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
      console.log('right')
    } else {
      setSelectedAnswer(false)
      console.log('wrong')
    }
  }
  const navigate = useNavigate()
  const ApplyFunction = (e) => {
    e.preventDefault()
    navigate("/dashboards/dashboard2/FormOfApplications/" + id, { state: { id: id } }) 
  }
  return (
    <div className="quiz-container">
      <h1>Quiz</h1>

      {!showResult ?
        (
          <div className="addedClass">
            <div>
              <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
              <span className="total-question">/{addLeadingZero(questions.length)}</span>
            </div>
            {question}
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null}
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button onClick={onClickNext} disabled={selectedAnswerIndex === null} >
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )
        :
        (<div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          <Button color="primary" variant="contained" onClick={(e) => { ApplyFunction(e) }}>
            apply
          </Button>
        </div>)}

    </div>
  )
}
export default QuizzDataScience