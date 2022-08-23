import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import { Alert } from "react-native";
import { AuthProviderProps, User } from "src/@types/hooks/use-auth";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_COLLECTION = "@gopizza:users";

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
          .then(async (profile) => {
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin,
              };

              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userData)
              );
              setUser(userData);
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

  const loadUserStorageData = async () => {
    setIsLogging(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User;
      setUser(userData);
    }

    setIsLogging(false);
  };

  const signOut = async () => {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  };

  const forgotPassword = async (email: string) => {
    if (!email) {
      return Alert.alert("Redefinir senha", "Informe o e-mail.");
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          "Redefinir senha",
          "Enviamos um link no seu e-mail para redefinir sua senha."
        )
      )
      .catch(() =>
        Alert.alert(
          "Redefinir senha",
          "Não foi possível enviar o e-mail para redefinir sua senha."
        )
      );
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLogging, signIn, signOut, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
