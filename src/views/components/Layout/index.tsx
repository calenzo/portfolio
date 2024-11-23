import { Header } from "../Header";
import { ILayout } from "./@types";

import * as Styled from "./styles";

export const Layout = ({ children }: ILayout) => (
  <Styled.Container>
    <Header />
    <>{children}</>
  </Styled.Container>
);
