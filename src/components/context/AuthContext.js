import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return;
  };

  const signIn = (email, password) => {
    return;
  };

  const logOut = () => {
    return;
  };

  return (
    <UserContext.Provider value={{ createUser, signIn, user, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
