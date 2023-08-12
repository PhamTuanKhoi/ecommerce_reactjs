import React, { useState } from "react";
import { jwtManager } from "../helpers/jwtManager";
import WebContext from "./context";

function WebProvider() {
   const [user, setUser] = useState();

   async function logout() {
      setUser(undefined);
      jwtManager.clear();
      window.location.reload();
   }

   //return
   return (
      <WebContext.Provider
         value={{
            user,
            setUser,
            logout,
         }}
      ></WebContext.Provider>
   );
}
function useWeb() {
   const context = React.useContext(WebContext);
   if (context === undefined) {
      throw new Error("Error in useWeb");
   }
   return context;
}

export { WebProvider, useWeb };
