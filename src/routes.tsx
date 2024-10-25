import {
  BrowserRouter as Router,
  Routes as WrapperRoutes,
  Route,
} from "react-router-dom";

import { Pages } from "./application/constants";

export const Routes = () => (
  <Router>
    <WrapperRoutes>
      {Pages.map(({ path, Element }) => (
        <Route path={path} element={<Element />} />
      ))}
    </WrapperRoutes>
  </Router>
);
