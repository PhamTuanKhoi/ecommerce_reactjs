import axios from "axios";
const path = "/auth/";

export const AuthAPI = {
   async signup(payload) {
      return await axios.post(path + "signup", payload);
   },

   async signin(payload) {
      return await axios.post(path + "signin", payload);
   },
};
