import React, { useState } from "react";
import * as Styled from "./App.styled";
import NegotiationForm from "./components/NegotiationForm/NegotiationForm";
import ResultCard from "./components/ResultCard/ResultCard";
import Tabs from "./components/Tabs/Tabs";
import { initialState, useAppContext } from "./hooks/useAppContext";
import { appContext } from "./store/appContext";

const App = () => {
  const context = useAppContext();
  const [openResultCard, setOpenResultCard] = useState(false);
  const {
    appState: { employeeInput, employerInput },
    setAppState,
  } = context;

  const closeResultCardHandler = () => {
    setOpenResultCard(false);
    setAppState(() => initialState);
  };

  return (
    <appContext.Provider value={context}>
      <div id="app-modal" />
      <Styled.AppWrapper className="App">
        <Tabs>
          <NegotiationForm setOpenResultCard={setOpenResultCard} />
        </Tabs>
        {openResultCard && (
          <ResultCard
            closeCardHandler={closeResultCardHandler}
            employeeInput={employeeInput}
            employerInput={employerInput}
          />
        )}
      </Styled.AppWrapper>
    </appContext.Provider>
  );
};

export default App;
