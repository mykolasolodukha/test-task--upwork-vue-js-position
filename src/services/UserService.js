// UserService.js

import axios from "axios";
import router from "../router";

const API_URL = "http://www.api.example.com/auth/";

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Remove the token from local storage
      localStorage.removeItem("token");

      // Redirect to the sign-in page
      router.push("/authentication/signin/basic");
    }

    return Promise.reject(error);
  }
);

class UserService {
  async signUp(user) {
    return axios.post(API_URL + "sign-up", user);
  }

  async signIn(user) {
    return axios.post(API_URL + "sign-in", user);
  }
}

export default new UserService();
