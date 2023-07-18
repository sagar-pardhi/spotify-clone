"use client";

import { UserContextProvider } from "@/hooks/use-user";

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default UserProvider;
