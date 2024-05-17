import { signinApi, signupApi, signoutApi } from "./api";
import axiosReq from "@/utils/axios-req";


export const loginReq = (data) => {
  return axiosReq({
    url: signinApi,
    data,
    method: "post",
    isParams: false,
    isAlertErrorMsg: true
  });
};


export const signupReq = (data) => {
  return axiosReq({
    url: signupApi,
    data,
    method: "post",
    isParams: false,
    isAlertErrorMsg: true
  });
};

export const signoutReq = () => {
  return axiosReq({
    url: signoutApi,
    method: "post",
    isParams: false,
    isAlertErrorMsg: true
  });
};