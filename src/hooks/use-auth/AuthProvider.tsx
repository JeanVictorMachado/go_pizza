import { useState } from "react";
import { AuthContext } from "./AuthContext";

import { Alert } from "react-native";
import { AuthProviderProps } from "src/@types/hooks/use-auth";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogging, setIsLogging] = useState(false);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert(
        "Login",
        "Os campos de e-mail e senha são obrigatórios."
      );
    }

    setIsLogging(true);

    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((account) => {
    //     console.log(account);
    //   })
    //   .catch((error) => {
    //     const { code } = error;

    //     if (code === "auth/user-not-found" || code === "auth/wrong-password") {
    //       return Alert.alert("Login", "E-mail e/ou senha inválida.");
    //     }

    //     return Alert.alert("Login", "Não foi possível realizar o login.");
    //   })
    //   .finally(() => setIsLogging(false));
  };

  return (
    <AuthContext.Provider value={{ isLogging, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
