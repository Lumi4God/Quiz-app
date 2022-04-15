import React from 'react'
import Image from '../images/questmark1.png'

const Header = () => {
    
  return (
    <section id="about" className="success">
      {/*Logo*/}
      <aside>
        <img className='pic' src={Image} alt="logo" />
      </aside>

        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2>Test your Knowledge</h2>
              <h3>Current affairs, logical questions and general knowledge</h3>

              <div className="row">
                <div className="col">
                  <p>
                    This Question-game was created to keep our brain and memory refreshed all time, was created for self esteem building and also in helping increasing our knowledge in a {' '}
                    <strong style={{ textDecoration: 'underline' }}>
                      comical way
                    </strong>
                    {/* . components (AKA componentization) and flow data accross them. */}
                  </p>
                </div>
                <div className="col4">
                  <p>
                    <strong>HOW TO PLAY?, </strong> easy, straight forward and uncomplicated. when you are <strong>READY,</strong>  click on one of the {/*radio */} buttons below and {/* it will randomly select the maximum questions for each button and */} start answering questions.
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
              {/* <hr className="star-light" /> */}

              {/*radio-buttons, questions option*/}
              {/* {<QuestionCount
                setQuestionCount={setQuestionCount}
              />} */}

            </div>
          </div>
        </div>
      </section>
  )
}

export default Header