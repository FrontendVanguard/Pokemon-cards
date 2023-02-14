import axios from "axios";
import React from "react";

import { CharacterPreview } from "../CharacterPreview/CharacterPreview";
import { AppContainer } from "./App.styles";

export interface Pokemon {
  name: string;
  id: string;
  image: string;
  hp?: string;
  rarity?: string;
  illustrator?: string;
  evolveFrom?: string;
}

export const App = () => {
  const [data, setData] = React.useState<Pokemon[] | null>(null);

  React.useEffect(() => {
    axios.get(`https://api.tcgdex.net/v2/en/cards/`).then((res) => {
      setData(res.data.slice(5, 15));
    });
  }, []);

  return (
    <AppContainer className="App">
      {data &&
        data.map((el: Pokemon) => {
          return <CharacterPreview pokemon={el} key={el.id} />;
        })}
    </AppContainer>
  );
};
