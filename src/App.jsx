import React, { useState } from "react";
import useSound from "use-sound"; // sound installed - npm install use-sound
import soundOn from "./audio/congratulations.mp3";
import soundOns from "./audio/clap.mp3";
import soundOff from "./audio/oh-no.wav";
import soundOffs from "./audio/game-end.mp3";
import soundOnX from "./audio/click.wav";
/* import soundXX from './audio/let-get-it-stardet.mp3' */

import QuestionCount from "./components/radiobuttons";
import getRandomQuestions from "./tools/questions";
import Footer from "./components/Footer";
import Header from "./components/Header";

const questions = getRandomQuestions(100); /**/

export default function App() {
  /* useEffect(() => {
    window.addEventListener("onload", () => { 
       {welcome()}
      console.log('right')
      })
  },[]) */
  const [number, setNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  /**You wrote this here**/
  /* const [qIndex, setQIndex] = useState(0); */

  const [play] = useSound(soundOn); // useSound (soundOn)
  const [plays] = useSound(soundOns); // useSound (soundOn)
  const [played] = useSound(soundOff); // useSound (soundOn)
  const [player] = useSound(soundOffs); // useSound (soundOn)
  const [playX] = useSound(soundOnX); // useSound (soundOn)
  /* const [welcome] = useSound(soundXX) */

  /*radioButton*/
  const setQuestionCount = (event) => {
    console.log(event.target.tagName, event.target.value);
    setNumber(event.target.value)
  };
  /*Score, nextQuestion*/
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {/*Header and About section */}
      <Header />
      {/*radio-buttons, questions option*/}
      <QuestionCount setQuestionCount={setQuestionCount} />


      {showScore ? (
        <div className="score-section">
          <div>
            <h2>
              You scored {score} out of {questions.length}
            </h2>
            {score > 75 ? (
              <div>
                {" "}
                <h1 className="header1">Congratulations</h1> {plays()} {play()}{" "}
                {/*calling the useSound here*/}{" "}
                <button
                  className="btn1"
                  onClick={() => window.location.reload(false)}
                >
                  Play again
                </button>
              </div>
            ) : (
              <div>
                {" "}
                <h1 className="header2">Don't give up</h1> {played()} {player()}
                {/*calling the useSound here*/}{" "}
                <button
                  className="btn2"
                  onClick={() => window.location.reload(false)}
                >
                  Try again
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="btn3"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText} {playX()}
                {/*calling the useSound here.*/}{" "}
              </button>
            ))}
          </div>
        </>
      )}

      {/*Footer section*/}
      <Footer />
    </div>
  );
}
