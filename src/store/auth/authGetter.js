const GET_TOKEN = state => {
  return state.token
}

const GET_USER_INFO = state => {
  return state.user_info
}

const GET_IP_INFO = state => {
  return state.ip_info
}

export default {
  GET_TOKEN,
  GET_USER_INFO,
  GET_IP_INFO
}
