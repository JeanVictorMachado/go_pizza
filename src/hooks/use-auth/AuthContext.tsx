import { createContext, useContext } from "react";
import { AuthContextDataProps } from "src/@types/hooks/use-auth";

export const AuthContext = createContext({} as AuthContextDataProps);

export default function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  return context;
}
