/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import { initialValues } from "./initialValues";
import { IAppContext, IAppState } from "./@types";

export const AppContext = createContext<IAppContext>(initialValues.context);

export const AppProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [state, setState] = useState<IAppState>(initialValues.state);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
