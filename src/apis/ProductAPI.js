import axios from "axios";
const path = "api/product/";

export const ProductAPI = {
   async list(query = {}) {
      return await axios.get(path, {
         params: query,
      });
   },

   async newArrivals() {
      return await axios.get(path + "new");
   },
};
