import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export type TypesButtonProps = "primary" | "secondary";

type ButtonProps = {
  type: TypesButtonProps;
};

export const Container = styled(RectButton)<ButtonProps>`
  ${({ theme, type }) => css`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    margin-top: 16px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;

    background-color: ${type === "primary"
      ? theme.colors.success_900
      : theme.colors.primary_800};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fonts.title};
    color: ${theme.colors.title};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.title,
}))``;
