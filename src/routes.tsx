import {
  BrowserRouter,
  Routes as WrapperRoutes,
  Route,
} from "react-router-dom";
import { Pages } from "./application/constants";

export const Routes = () => {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        {Pages.map(({ path, Element }) => (
          <Route path={path} element={<Element />} />
        ))}
      </WrapperRoutes>
    </BrowserRouter>
  );
};
