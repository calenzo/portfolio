import { ITypeTheme } from "../../../@types/theme";

export interface IAppState {
  theme: ITypeTheme;
}

export interface IAppContext {
  state: IAppState;
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
}
