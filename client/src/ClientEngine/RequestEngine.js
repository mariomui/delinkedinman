import axios from 'axios';

const mySelf = axios.create({
  baseURL: 'http://localhost:3456',
})

const linkedIn = axios.create({
  baseURL: 'http://app.linkedin-reach.io/words'
})

export default {
  Phone: {
    mySelf,
    linkedIn
  }
}