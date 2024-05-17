import { useRouter } from "vue-router";
import http from "../api";
import { TOKEN_KEY } from "../constants";

export default function useAuth() {
  const isAuth = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return !!token;
  };

  async function signIn(email, password) {
    try {
      const { result, error } = await http.post("/auth/sign-in", {
        email,
        password,
      });
      if (!result.ok) {
        throw new Error(error);
      }
      const token = result.data.token;
      localStorage.setItem(TOKEN_KEY, token);
      window.location.replace("/");
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  async function signUp(name, email, password) {
    try {
      const { result, error } = await http.post("/auth/sign-up", {
        name,
        email,
        password,
      });
      if (!result.ok) {
        throw new Error(error);
      }

      const token = result.data.token;
      localStorage.setItem(TOKEN_KEY, token);
      window.location.replace("/");
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  return { isAuth, signIn, signUp };
}
