import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-ed98c-default-rtdb.firebaseio.com/'
})