import { http } from "./config";

export default {
  userInfo: (username) => {
    return http.get(`users/${username}`);
  },
  register: ({ name, username, email, password }) => {
    return http.post("/users", {
      name,
      username,
      email,
      password,
    });
  },
  login: (email, password) => {
    return http.post("/sessions", { email, password });
  },
  isValid: ({ id, name, username, email, token }) => {
    return http.post(
      "/sessions/valid",
      { id, name, username, email },
      { headers: {
        authorization: `Bearer ${token}`
      }}
    );
  },
};
