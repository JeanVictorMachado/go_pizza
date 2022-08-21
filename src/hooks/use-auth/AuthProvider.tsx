import { useState } from "react";
import { AuthContext } from "./AuthContext";

import { Alert } from "react-native";
import { AuthProviderProps, User } from "src/@types/hooks/use-auth";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert(
        "Login",
        "Os campos de e-mail e senha são obrigatórios."
      );
    }

    setIsLogging(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        firestore()
          .collection("users")
          .doc(account.user.uid)
          .get()
          .then((profile) => {
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists) {
              setUser({
                id: account.user.uid,
                name,
                isAdmin,
              });
            }
          })
          .catch(() => Alert.alert("Login", "Usuário não encontrado."));
      })
      .catch((error) => {
        const { code } = error;

        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("Login", "E-mail e/ou senha inválida.");
        }

        return Alert.alert("Login", "Não foi possível realizar o login.");
      })
      .finally(() => setIsLogging(false));
  };

  console.log("user: ", user);

  return (
    <AuthContext.Provider value={{ user, isLogging, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
