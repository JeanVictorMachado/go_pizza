import { TypesInputProps } from "./styles";
import { TextInputProps } from "react-native";

import * as S from "./styles";

type InputProps = TextInputProps & {
  type?: TypesInputProps;
};

export const Input = ({ type = "primary", ...rest }: InputProps) => {
  return <S.Container type={type} {...rest}></S.Container>;
};
