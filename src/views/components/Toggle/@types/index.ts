export interface IToggle {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IContainer {
  isToggled: boolean;
}
