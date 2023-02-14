import React from "react";
import { Pokemon } from "../App/App";
import { useNavigate } from "react-router-dom";

import { CharacterContainer, Image, SubText } from "./CharacterPreview.styles";

interface CharacterProps {
  pokemon: Pokemon;
}

export const CharacterPreview: React.FC<CharacterProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  let { name, id, image } = pokemon;
  image = image + "/high.jpg";

  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <CharacterContainer onClick={handleClick}>
      <Image src={image} alt={name} />
      <SubText>Name: {name}</SubText>
    </CharacterContainer>
  );
};
