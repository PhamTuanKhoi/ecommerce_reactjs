import axios from "axios";
const path = "/auth/";

export const AuthAPI = {
   async register(payload) {
      return await axios.post(path + "signup", payload);
   },

   async login(payload) {
      return await axios.post(path + "signin", payload);
   },
};
