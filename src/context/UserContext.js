import { createContext, useState, useContext } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

const useUserState = () => useContext(UserContext);

export { useUserState, UserProvider };
