import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `http://apibbvav2.epizy.com`
})

export default axiosClient