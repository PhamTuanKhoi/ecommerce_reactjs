import axios from "axios";
const path = "api/category/";

export const CategoryAPI = {
   async list(query = {}) {
      return await axios.get(path, {
         params: query,
      });
   },
};
