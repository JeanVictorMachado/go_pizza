import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

export const ButtonBack = ({ ...rest }: TouchableOpacityProps) => {
  const { colors } = useTheme();

  return (
    <S.Container {...rest}>
      <MaterialIcons name="chevron-left" size={20} color={colors.title} />
    </S.Container>
  );
};
