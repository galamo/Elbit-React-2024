import { useReducer } from "react";
import { IGlobalState, initialState, SettingsContext } from ".";

function settingsReducer(
  state: IGlobalState,
  action: { type: string; payload?: any }
): IGlobalState {
  switch (action.type) {
    case "SET_IS_LOCAL_TIME": {
      return { ...state, isLocalTime: action.payload.isLocalTime };
    }
    default: {
      return state;
    }
  }
}

export default function SettingsProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);
  return (
    <SettingsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}
