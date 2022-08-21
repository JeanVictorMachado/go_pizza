import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import { AuthProvider } from "@hooks/use-auth/AuthProvider";
import { SignIn } from "@screens/SignIn";

import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoader] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoader) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ThemeProvider>
  );
}
