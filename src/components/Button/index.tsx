import { RectButtonProps } from "react-native-gesture-handler";
import { TypesButtonProps } from "./styles";

import * as S from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
  type?: TypesButtonProps;
  isLoading?: boolean;
};

export const Button = ({
  title,
  type = "primary",
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? <S.Load /> : <S.Title>{title}</S.Title>}
    </S.Container>
  );
};
