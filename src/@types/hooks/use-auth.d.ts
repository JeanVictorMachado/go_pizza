import { ReactNode } from "react";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextDataProps = {
  user: User | null;
  isLogging: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
};
