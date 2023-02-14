import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "./../../constants/colors";

export const Content = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: center;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 350px;
`;

export const MajorText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 32px;
  line-height: 1.25;
  margin-top: 24px;
`;

export const SubText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 22px;
  line-height: 2;
`;

export const Back = styled(NavLink)`
  position: fixed;
  top: 5%;
  left: 5%;
  color: ${colors.GRAY_100};
  cursor: pointer;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${colors.GRAY_400};
  :hover {
    color: ${colors.WHITE};
  }
`;

export const Image = styled.img`
  box-shadow: 0 0 0 2px rgba(240, 246, 252, 0.1);
  cursor: pointer;
  width: 300px;
  height: 300px;
`;
