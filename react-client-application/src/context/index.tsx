import { createContext, Dispatch } from "react";

export interface IGlobalState {
  isLocalTime: boolean;
  dispatch?: Dispatch<{ type: string; payload?: any }>;
}

export const initialState: IGlobalState = {
  isLocalTime: true,
};

export const SettingsContext = createContext<IGlobalState>(initialState);
