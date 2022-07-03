import Vue from "vue";
const loginAPI = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post("auth", template)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const registerAPI = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post("auth", template)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  loginAPI,
  registerAPI,
  recoveryPassword,
  changePassword,
  verificationCode,
  sendCode,
};
