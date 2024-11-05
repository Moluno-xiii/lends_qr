"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { UserInfo } from "../types";
import { getUserInformation } from "../_lib/data-fetch";

interface UserInfoContextProps {
  userInformation: UserInfo | null;
}

const UserInfoContext = createContext<UserInfoContextProps | undefined>(
  undefined
);

const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInformation, setUserInformation] = useState<UserInfo | null>(null);

  useEffect(() => {
    getUserInformation();
    const storedInfo = localStorage.getItem("userInfo");
    if (storedInfo) {
      setUserInformation(JSON.parse(storedInfo));
    }
  }, []);

  const value = { userInformation };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

const useUserInfoContext = () => {
  const context = useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error("UserInfoContext was used outside it's provider");
  }
  return context;
};

export default UserInfoProvider;
export { useUserInfoContext };
