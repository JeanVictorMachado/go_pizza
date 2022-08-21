import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import useAuth from "@hooks/use-auth/AuthContext";
import brandImg from "@assets/brand.png";

import * as S from "./styles";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLogging, signIn } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <S.Content>
          <S.Brand source={brandImg} />

          <S.Title>Login</S.Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <Button
            title="Entrar"
            type="secondary"
            isLoading={isLogging}
            onPress={handleSignIn}
          />

          <S.ForgotPasswordButton>
            <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
          </S.ForgotPasswordButton>
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
};
