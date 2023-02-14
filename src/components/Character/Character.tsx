import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

import { Pokemon } from "../App/App";
import {
  Back,
  Content,
  Image,
  MajorText,
  SubText,
  PokemonContainer,
} from "./Character.styles";

export const Character = () => {
  const { id } = useParams();

  const [data, setData] = React.useState<Pokemon | null>(null);

  React.useEffect(() => {
    axios.get(`https://api.tcgdex.net/v2/en/cards/${id}`).then((res) => {
      const data: Pokemon = res.data;
      setData(data);
    });
  }, [id]);

  return (
    data && (
      <Content>
        <Back to="/"> ← Back</Back>
        <PokemonContainer>
          <Image src={data.image + "/high.jpg"} width={296} height={296} />
          <MajorText>{data?.name}</MajorText>

          <SubText>Illustrator: {data.illustrator}</SubText>
          <SubText>HP: {data.hp}</SubText>
          <SubText>Rarity: {data.rarity}</SubText>
          <SubText>Evolve from: {data.evolveFrom}</SubText>
        </PokemonContainer>
      </Content>
    )
  );
};
