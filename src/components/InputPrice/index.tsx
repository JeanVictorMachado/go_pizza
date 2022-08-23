import { TextInputProps } from "react-native";

import * as S from "./styles";

type InputPriceProps = TextInputProps & {
  size: string;
};

export const InputPrice = ({ size, ...rest }: InputPriceProps) => {
  return (
    <S.Container>
      <S.SizeContainer>
        <S.Label>{size}</S.Label>
      </S.SizeContainer>

      <S.Label>R$</S.Label>

      <S.Input keyboardType="numeric" {...rest} />
    </S.Container>
  );
};
