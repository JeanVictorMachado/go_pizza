import { useState } from "react";
import { Platform, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import { Button } from "@components/Button";
import { ButtonBack } from "@components/ButtonBack";
import { Input } from "@components/Input";
import { InputPrice } from "@components/InputPrice";
import { Photo } from "@components/Photo";

import * as S from "./styles";

export const Product = () => {
  const [image, setImage] = useState("");

  const handlePickerImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  return (
    <S.Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <S.Header>
        <ButtonBack />

        <S.Title>Cadastrar</S.Title>

        <TouchableOpacity>
          <S.DeleteLabel>Deletar</S.DeleteLabel>
        </TouchableOpacity>
      </S.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Upload>
          <Photo uri={image} />
          <S.PickImageButton
            title="Carregar"
            type="secondary"
            onPress={handlePickerImage}
          />
        </S.Upload>

        <S.Form>
          <S.InputGroup>
            <S.Label>Nome</S.Label>
            <Input />
          </S.InputGroup>

          <S.InputGroup>
            <S.InputGroupHeader>
              <S.Label>Descrição</S.Label>
              <S.MaxCharacters>0 de 60 caracteres</S.MaxCharacters>
            </S.InputGroupHeader>
            <Input
              multiline
              maxLength={60}
              style={{
                height: 80,
              }}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Tamanhos e preços</S.Label>

            <InputPrice size="P" />
            <InputPrice size="M" />
            <InputPrice size="G" />
          </S.InputGroup>

          <Button title="Cadastrar pizza" />
        </S.Form>
      </ScrollView>
    </S.Container>
  );
};
