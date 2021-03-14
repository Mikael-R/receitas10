import { http } from "./config";

export default {
  userInfo: (username) => {
    return http.get(`users/${username}`);
  },
};
