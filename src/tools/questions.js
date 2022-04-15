import questions from '../data/questions.json'

questions.sort(() => Math.random() -0.5)

const getRandomQuestions = (n) => {
    
  return questions.splice(0, n)
}
export default getRandomQuestions