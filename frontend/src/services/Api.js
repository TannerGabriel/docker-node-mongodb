import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://${process.env.VUE_APP_API_URL}:3000/` || 'http://localhost:3000/'
  })
}