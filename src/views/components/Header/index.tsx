import { useLocation, useNavigate } from "react-router-dom";

import * as Styled from "./style";
import { CustomToggle } from "./components";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      content: "Sobre",
      pathname: "/",
    },
    {
      content: "Habilidades",
      pathname: "/skills",
    },
    {
      content: "Projetos",
      pathname: "/projects",
    },
    {
      content: <CustomToggle />,
      pathname: "#",
    },
  ];

  return (
    <Styled.Items>
      {items.map(({ content, pathname }) => {
        const isActive = location.pathname === pathname;

        return (
          <Styled.Item isActive={isActive} onClick={() => navigate(pathname)}>
            {content}
          </Styled.Item>
        );
      })}
    </Styled.Items>
  );
};
