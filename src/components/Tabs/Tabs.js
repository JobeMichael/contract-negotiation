import React, { useContext } from "react";
import { appContext } from "../../store/appContext";
import * as Styled from "./Tabs.styles";

const tabsData = [
  { type: "employer", text: "Employer" },
  { type: "employee", text: "Employee" },
];

const Tabs = ({ children }) => {
  const {
    setAppState,
    appState: { currentUser },
  } = useContext(appContext);

  const tabClickHandler = (type) => {
    setAppState((prevState) => ({
      ...prevState,
      currentUser: type,
    }));
  };

  return (
    <>
      <Styled.ButtonGroup>
        {tabsData.map(({ type, text }) => (
          <Styled.Tab
            key={type}
            active={currentUser === type}
            onClick={() => tabClickHandler(type)}
            data-active={currentUser === type}
          >
            {text}
          </Styled.Tab>
        ))}
      </Styled.ButtonGroup>
      <p />
      <div>{children}</div>
    </>
  );
};

export default Tabs;
