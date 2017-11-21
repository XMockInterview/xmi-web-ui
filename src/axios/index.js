import axios from 'axios'

// Add a request interceptor
if (process.env.NODE_ENV === 'development') {
  // 与后端做联调时打开
  // axios.defaults.baseURL = '后端服务器域名'
}
axios.interceptors.request.use(function (config) {
// Do something before request is sent
  if (!config.headers['X-Requested-With']) {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
  }
  if (sessionStorage.getItem('userInfo') !== null) {
    // config.headers['token'] = JSON.parse(sessionStorage.getItem('userInfo')).token
    if (config.url.indexOf('?') >= 0) {
      config.url = config.url + '&token=' + JSON.parse(sessionStorage.getItem('userInfo')).token
    } else {
      config.url = config.url + '?token=' + JSON.parse(sessionStorage.getItem('userInfo')).token
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  if (response.headers) {
    if (response.headers.message && response.headers.message === 'nologin') {
      window.location.href = '/'
    }
    if (response.headers.message && response.headers.message === 'noauth') {
      window.location.href = '/#/noauth'
    }
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default axios
