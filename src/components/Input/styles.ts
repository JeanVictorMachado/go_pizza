import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type TypesInputProps = "primary" | "secondary";

type TextInputProps = {
  type: TypesInputProps;
};

export const Container = styled(TextInput).attrs<TextInputProps>(
  ({ theme, type }) => ({
    placeholderTextColor:
      type === "primary" ? theme.colors.secondary_900 : theme.colors.primary_50,
  })
)<TextInputProps>`
  ${({ theme, type }) => css`
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-family: ${theme.fonts.text};
    padding: 7px 0;
    padding-left: 20px;
    margin-bottom: 16px;
    border: 1px solid ${theme.colors.primary_50};
    border-radius: 12px;
    color: ${type === "primary"
      ? theme.colors.secondary_900
      : theme.colors.title};
    background-color: transparent;
  `}
`;
