import axios from "axios";
import { getItem, removeItem } from "@/utils/local-storage";

const service = axios.create();

service.interceptors.request.use(
  (req) => {
    const token = getItem("accessToken");
    req.headers["Authorization"] = `Bearer ${token}`;
    if ("get".includes(req.method?.toLowerCase())) req.params = req.data;
    return req;
  },
  (err) => {
    Promise.reject(err);
  }
);

service.interceptors.response.use(
  (res) => {
    const { status } = res.data;
    const successCode = "0,200,20000";
    const noAuthCode = "401,403,50012";
    if (successCode.includes(status)) {
      return res.data;
    } else {
      if (noAuthCode.includes(status) && !location.href.includes("/login")) {
        removeItem("accessToken");
        removeItem("refreshToken");
      }
      return Promise.reject(res.data);
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default function axiosReq(config) {
  return service({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json"
    },
    ...config
  });
}
