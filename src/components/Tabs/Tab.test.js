import { act, cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { appContext } from "../../store/appContext";
import Tabs from "./Tabs";

describe("<NegotiationForm/>", () => {
  const setAppState = jest.fn();

  afterEach(() => {
    setAppState.mockRestore();
    cleanup();
  });

  let renderResult;

  const mockContext = {
    appState: {
      currentUser: "employer",
      employerInput: 0,
      employeeInput: 0,
    },
    setAppState: setAppState,
  };

  const setup = () => (
    <appContext.Provider value={mockContext}>
      <Tabs>
        <h1>Children</h1>>
      </Tabs>
    </appContext.Provider>
  );

  it("should renders NegotiationForm properly", () => {
    act(() => {
      renderResult = render(setup());
    });

    expect(renderResult.baseElement).toMatchSnapshot();
  });

  it("should work all tabs properly", () => {
    const { getByText } = render(setup());

    const tabEmployee = getByText(/Employee/i);
    const tabEmployer = getByText(/Employer/i);

    expect(tabEmployee).toBeInTheDocument();
    expect(tabEmployer).toBeInTheDocument();

    fireEvent.click(tabEmployee);

    expect(tabEmployer.getAttribute("data-active")).toBe("true");
    expect(tabEmployee.getAttribute("data-active")).toBe("false");
  });
});
