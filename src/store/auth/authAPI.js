import Vue from 'vue'
const loginAPI = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post('auth/login', template)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const registerAPI = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post('auth/register', template)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const verificationCode = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post('auth/verificationCode', template)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const sendCode = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post('auth/sendCode', template)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const recoveryPassword = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post('auth/recovery', template)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const changePassword = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post('auth/changepassword', template)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  loginAPI,
  registerAPI,
  recoveryPassword,
  changePassword,
  verificationCode,
  sendCode
}
