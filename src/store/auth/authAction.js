import authAPI from './authAPI'

const LOGIN_TO = (context, payload) => {
    return new Promise((resolve, reject) => {
        authAPI
            .loginAPI(payload)
            .then((data) => {
                context.commit('SET_AUTH_STATE', data)
                context.commit('SET_USER_INFO', data.data.user)
                resolve(data)
            })
            .catch((error) => {})
    })
}

const REGISTER_TO = (context, payload) => {
    return new Promise((resolve, reject) => {
        authAPI
            .registerAPI(payload)
            .then((data) => {
                context.commit('SET_USER_INFO', data.data.user)
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const VERIFICATION_CODE = (context, payload) => {
    return new Promise((resolve, reject) => {
        authAPI
            .verificationCode(payload)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const RESEND_CODE = (context, payload) => {
    return new Promise((resolve, reject) => {
        authAPI
            .sendCode(payload)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const RECOVERY_PASSWORD = (context, payload) => {
    return new Promise((resolve, reject) => {
        authAPI
            .recoveryPassword(payload)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const CHANGE_PASSWORD = (context, payload) => {
    return new Promise((resolve, reject) => {
        authAPI
            .changePassword(payload)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const INITIAL_STATE = (context) => {
    context.commit('SET_INITIAL_STATE')
}

export default {
    LOGIN_TO,
    INITIAL_STATE,
    REGISTER_TO,
    VERIFICATION_CODE,
    RECOVERY_PASSWORD,
    CHANGE_PASSWORD,
    RESEND_CODE
}
