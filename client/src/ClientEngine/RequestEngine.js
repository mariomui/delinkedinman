import axios from 'axios';

const mySelf = axios.create({
  baseURL: '/v1',
})

const linkedIn = axios.create({
  baseURL: 'http://app.linkedin-reach.io/words'
})

export default {
  mySelf,
  linkedIn
}