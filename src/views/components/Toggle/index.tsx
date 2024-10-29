import { IToggle } from "./@types";

import * as Styled from "./styles";

export const Toggle = ({ state, setState }: IToggle) => {
  const onClick = () => {
    setState(!state);
  };

  return (
    <Styled.Container isToggled={state} onClick={onClick}>
      <Styled.Toggle />
    </Styled.Container>
  );
};
