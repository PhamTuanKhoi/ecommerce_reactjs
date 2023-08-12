import React from "react";

const defaultState = {
   user: undefined,
   login: () => {},
   logout: () => {},
};

const WebContext = React.createContext(defaultState);
export default WebContext;
