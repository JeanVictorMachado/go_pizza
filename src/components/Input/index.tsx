import { TypesInputProps } from "./styles";
import { TextInputProps } from "react-native";

import * as S from "./styles";

type InputProps = TextInputProps & {
  type?: TypesInputProps;
  borderColor?: TypesInputProps;
};

export const Input = ({
  type = "primary",
  borderColor = "primary",
  ...rest
}: InputProps) => {
  return (
    <S.Container type={type} borderColor={borderColor} {...rest}></S.Container>
  );
};
