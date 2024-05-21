import router from "@/router";
import { getItem } from "@/utils/local-storage";
import { getUserInfoReq } from "@/api/user";

const whiteList = ["/authentication/signin/basic", "/authentication/signup/basic", "/404", "/401"]; // no redirect whitelist
router.beforeEach(async (to) => {
  const token = getItem("accessToken");
  // console.log("token", token);
  if (token) {
    if (to.path === "/authentication/signin/basic") return "/";
    try {
      const userData = await getUserInfoReq(); // everytime change route, this will be called
      console.log(userData);
      return true;
    } catch (e) {
      alert("Token expired, please login again.");
      return `/authentication/signin/basic?redirect=${to.path}`;
    }
  } else {
    if (!whiteList.includes(to.path)) {
      return `/authentication/signin/basic?redirect=${to.path}`;
    } else {
      return true;
    }
  }
});
