import React, { useState } from 'react';
import useSound from 'use-sound'; // sound installed - npm install use-sound
import soundOn from './audio/congratulations.mp3';
import soundOned from './audio/clap.mp3'
import soundOff from './audio/oh-no.wav'
import soundOffs from './audio/game-end.mp3'
import soundOnX from './audio/click.wav'
/* import soundXX from './audio/let-get-it-stardet.mp3' */

import Question from './components/question'
import QuestionCount from './components/radiobuttons'
import questions from './data/questions'



export default function App() {
  /* useEffect(() => {
    window.addEventListener("onload", () => { 
       {welcome()}
      console.log('right')
      })
  },[]) */



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  /**You wrote this here**/
  const [qIndex, setQIndex] = useState(0)

  const [play] = useSound(soundOn); // useSound (soundOn)
  const [plays] = useSound(soundOned); // useSound (soundOn)
  const [played] = useSound(soundOff); // useSound (soundOn)
  const [player] = useSound(soundOffs); // useSound (soundOn)
  const [playX] = useSound(soundOnX); // useSound (soundOn)
  /* const [welcome] = useSound(soundXX) */


  const setQuestionCount = (event) => {
    console.log(event.target.tagName, event.target.value)
    // Your code to choose N random questions goes here.
    // Create an array of numbers [0, 1, ... 99]
    // Look at Array.fill().map()
    // Choose 20 numbers at random from this list
    // = Math.floor(Math.random() * array.length)
    // Create a selectedQuestions variable with these 20 numbers
    // setQIndex to get the next number
    // 
    // Set optimum score 15/20, 40/50, 80/100
  }

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



  // use optimumScore instead of score

  return (
    <div className='app'>

      {/*Header and About section */}
      <section id="about" className="success">

        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2>Test your Knowledge</h2>
              <h3>Current affairs, coding, logical questions and general knowledge</h3>

              <div className="row">
                <div className="col">
                  <p>
                    This Question-game was created to keep our brain and memory refreshed all time, was created for self esteem building and also in helping increasing our knowledge in a {' '}
                    <strong style={{ textDecoration: 'underline' }}>
                      comical way
                    </strong>
                    . components (AKA componentization) and flow data accross them.
                  </p>
                </div>
                <div className="col4">
                  <p>
                    <strong>HOW TO PLAY?, </strong> easy, straight forward and uncomplicated. when you are <strong>READY,</strong>  click on one of the radio buttons below and it will randomly select the maximum questions for each button and start answering them.
                  </p>
                </div>
                <div className="col-lg-8 col-lg-offset-2 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Lumi4God"
                    className="btn-outline"
                  >
                    <i className="fa fa-code-fork" /> Fork me on Github
                  </a>
                </div>
              </div>
              <hr className="star-light" />

              {/*radio-buttons, questions option*/}
              {<QuestionCount
                setQuestionCount={setQuestionCount}
              />}

            </div>
          </div>
        </div>
      </section>


     {/*  <Question
        question={questions[qIndex].questionText}
      /> */}

      {showScore ? (
        <div className='score-section'>
          <div>
            <h2>You scored {score} out of {questions.length}</h2>
            {score > 15 ? (<div> <h1 className='header1'>Congratulations</h1> {plays()} {play()} {/*calling the useSound here*/} <button className='btn1' onClick={() => window.location.reload(false)}>Play again</button></div>) : (<div> <h1 className='header2'>Don't give up</h1> {played()} {player()}{/*calling the useSound here*/} <button className='btn2' onClick={() => window.location.reload(false)}>Try again</button></div>)}

          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='btn3' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText} {playX()}</button>
            ))}
          </div>
        </>
      )}



      {/* <section className='myLogo'>
       <image src={require("./pic6.jpg")} alt=''/>
     </section> */}


      {/*Footer section*/}
      <footer>Copyright: LumiCode 100%

        <a href="https://www.linkedin.com/in/olumide-jones-ab2031215/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>

        <a href="https://github.com/Lumi4God" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github-square"></i>
        </a>

        <a href="https://www.instagram.com/tribe_of_jones/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
        </a>

        <a href="https://www.youtube.com/c/Lumigoodboi" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-youtube"></i>
        </a>

        <a href="https://open.spotify.com/artist/3yqkjMHcqHPOqML0JH89mA" target="_blank" rel="noopener noreferrer"><i
          class="fab fa-spotify"></i></a>

        <a href="https://www.tiktok.com/@tribe_of_jones" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-tiktok"></i>
        </a>

      </footer>
    </div>
  );
}
