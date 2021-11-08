import axios from 'axios'
import store from 'Store'

// create an axios instance
const service = axios.create({
  baseURL: '/',
  withCredentials: true,
  timeout: 5000,
})

// error
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    const token = store.getters['common/token']
    if (error.response.status === 403) {
      // notification.error({
      //   message: 'Forbidden',
      //   description: data.message
      // })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      // notification.error({
      //   message: 'Unauthorized',
      //   description: 'Authorization verification failed'
      // })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use((config) => {
  // do something before request is sent
  const token = store.getters['common/token']

  if (token) {
    // ['Access-Token'] is a custom headers key
    config.headers['Access-Token'] = token
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  const res = response.data

  // if the custom code is not 10000, it is judged as an error.
  if (res.code !== 10000) {
    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // to re-login
    } else {
      // show error
    }
    return Promise.reject(res.message || 'Error')
  } else {
    return res.data
  }
}, err)

export default service
