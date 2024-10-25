import { ILayout } from "./@types";

import * as Styled from "./styles";

export const Layout = ({ children }: ILayout) => (
  <Styled.Container>{children}</Styled.Container>
);
