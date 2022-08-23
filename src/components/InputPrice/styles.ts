import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    border: 1px solid ${theme.colors.shape};
  `}
`;

export const SizeContainer = styled.View`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
    border-right-width: 1px;
    border-right-color: ${theme.colors.shape};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.secondary_900};
  `}
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: 7px;
`;
