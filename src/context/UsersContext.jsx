import { createContext, useState } from "react";

export const UsersContext = createContext({
  usersData: [],
  getUsersData: () => {},
});

export const UsersProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    try {
      const resp = await fetch("https://dummyjson.com/users");
      const data = await resp.json();
      setUsersData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        usersData: usersData,
        getUsersData,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
