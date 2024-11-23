import { IToggle } from "./@types";

import * as Styled from "./styles";

export const Toggle = ({ isToggled, toggleFunction }: IToggle) => (
  <Styled.Container isToggled={isToggled} onClick={toggleFunction}>
    <Styled.Toggle />
  </Styled.Container>
);
