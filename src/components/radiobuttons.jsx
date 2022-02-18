/* const setQuestionCount = (event) => {
  console.log(event.target.tagName, event.target.value);
  // Your code to choose N random questions goes here.
  // Create an array of numbers [0, 1, ... 99]
  // Look at Array.fill().map()
  // Choose 20 numbers at random from this list
  // = Math.floor(Math.random() * array.length * 10)
  // Create a selectedQuestions variable with these 20 numbers
  // setQIndex to get the next number
  //
  // Set optimum score 15/20, 40/50, 80/100
}; */

const QuestionCount = (props) => {

  return (
    <div className="divRadio"
      onChange={props.setQuestionCount}
    >
      <label htmlFor="twenty" key="twenty">
        <input type="radio" name="count" id="twenty" value="twenty" />
        Stage 1 (20 questions)
      </label>


      <label htmlFor="fifty" key="fifty">
        <input type="radio" name="count" id="fifty" value="fifty" />
        Stage 2 (50 questions)
      </label>


      <label htmlFor="hundred" key="hundred">
        <input type="radio" name="count" id="hundred" value="hundred" />
        Stage 3 (100 questions)
      </label>
    </div>
  )
}

export default QuestionCount