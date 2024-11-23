import {
  BrowserRouter,
  Routes as WrapperRoutes,
  Route,
} from "react-router-dom";

import { Pages } from "./application/constants";
import { Layout } from "./views/components";

export const Routes = () => {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        {Pages.map(({ path, Element }) => (
          <Route
            path={path}
            element={
              <Layout>
                <Element />
              </Layout>
            }
          />
        ))}
      </WrapperRoutes>
    </BrowserRouter>
  );
};
