import * as S from "./styles";

type PhotoProps = {
  uri: string | null;
};

export const Photo = ({ uri }: PhotoProps) => {
  if (uri) {
    return <S.Image source={{ uri }} />;
  }

  return (
    <S.Placeholder>
      <S.PlaceholderTitle>Nenhuma foto{"\n"}carregada</S.PlaceholderTitle>
    </S.Placeholder>
  );
};
