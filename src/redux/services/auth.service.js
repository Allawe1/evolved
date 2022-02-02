import * as api from "../api";
import axios from "axios";
const register = (username, email, password) => {
  return axios.post(api.register, {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(api.loginUser, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const update = (id, newUserInfo) => {
  return axios.put(api.updateUser + `/${id}`, newUserInfo).then((response) => {
    return response.data;
  });
};
const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
  update,
};
