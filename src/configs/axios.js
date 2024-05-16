import axios from 'axios'
import { logout } from '@/helpers/auth'

const { VITE_API_URL, VITE_DEV_MODE } = import.meta.env

export const setAxiosConfigurations = () => {
  axios.defaults.baseURL = VITE_API_URL
  const token = localStorage.getItem('TOKEN')
  if (VITE_DEV_MODE === 'true' && token) axios.defaults.headers.common["Authorization"] = token

  axios.interceptors.response.use((response) => response, (error) => {
    if (error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false) {
      return Promise.reject(error)
    }
    if (error.response?.status) {
      switch (error.response.status) {
        case 401:
          alert(error.message)
          logout()
          location.href = "#/authentication/signin/basic"
          break
        default: alert(error.message)
      }
    }
    return Promise.reject(error)
  })
}
