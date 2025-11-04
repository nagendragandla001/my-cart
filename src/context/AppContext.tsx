import { createContext, useContext, useState } from "react";
import type { UserInfo } from "../types/types";

interface AppContextProps {
  user: UserInfo;
  loginUser: (userInfo: UserInfo) => void;
}

const AppContext = createContext<AppContextProps>({
  user: { userName: "", password: "" },
  loginUser: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserInfo>({
    userName: "",
    password: "",
  });

  const loginUser = (userInfo: UserInfo) => {
    setUser(userInfo);
  };

  return (
    <AppContext.Provider value={{ user, loginUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
