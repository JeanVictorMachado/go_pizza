import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { Button } from "@components/Button";

export const Container = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
}))`
  width: 100%;
  padding: ${getStatusBarHeight() + 33}px 20px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    font-family: ${theme.fonts.title};
    color: ${theme.colors.title};
  `}
`;

export const DeleteLabel = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.title};
  `}
`;

export const Upload = styled.View`
  width: 100%;
  margin: 32px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PickImageButton = styled(Button)`
  max-width: 90px;
  margin: 0;
  margin-left: 32px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 0 24px 60px 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 12px;
    font-size: 14px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.secondary_900};
  `}
`;

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const InputGroupHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MaxCharacters = styled.Text`
  ${({ theme }) => css`
    font-size: 10px;
    margin-bottom: 12px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.secondary_900};
  `}
`;
