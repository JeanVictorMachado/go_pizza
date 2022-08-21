import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBotton: getBottomSpace() + 48,
  },
})`
  width: 100%;
  padding: 16px 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 24px;
    font-size: 32px;
    font-family: ${theme.fonts.title};
    color: ${theme.colors.title};
  `}
`;

export const Brand = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 340px;
  margin: auto;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: 8px;
`;

export const ForgotPasswordLabel = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.title};
  `}
`;
