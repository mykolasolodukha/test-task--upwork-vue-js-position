import axios from "axios";
import { TOKEN_KEY } from "../constants";

const http = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(async (response) => {
  try {
    if (response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.replace(TOKEN_KEY);
      throw new Error("Token expired...");
    }
    return response;
  } catch (error) {
    console.error(error);
  }
});

export default http;
