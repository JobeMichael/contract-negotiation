import { useCallback, useState } from "react";

export const initialState = {
  currentUser: "employer",
  employerInput: 0,
  employeeInput: 0,
};

export const useAppContext = () => {
  const [appState, setState] = useState(initialState);

  const setAppState = useCallback((currentState) => {
    setState(currentState);
  }, []);

  return {
    appState,
    setAppState,
  };
};
