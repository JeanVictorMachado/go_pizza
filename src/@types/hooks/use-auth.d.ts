import { ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextDataProps = {
  isLogging: boolean;
  signIn: (email: string, password: string) => Promise<void>;
};
