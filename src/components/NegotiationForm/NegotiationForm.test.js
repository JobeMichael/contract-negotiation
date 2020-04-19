import { act, cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { appContext } from "../../store/appContext";
import NegotiationForm from "./NegotiationForm";

describe("<NegotiationForm/>", () => {
  const setOpenResultCard = jest.fn();
  const setAppState = jest.fn();

  afterEach(() => {
    cleanup();
    setOpenResultCard.mockRestore();
    setAppState.mockRestore();
  });

  let renderResult;

  const setup = (context) => (
    <appContext.Provider value={context}>
      <NegotiationForm setOpenResultCard={setOpenResultCard} />
    </appContext.Provider>
  );

  it("renders NegotiationForm properly", () => {
    const mockContext = {
      appState: {
        currentUser: "employer",
        employerInput: 0,
        employeeInput: 0,
      },
    };
    act(() => {
      renderResult = render(setup(mockContext));
    });

    expect(renderResult.baseElement).toMatchSnapshot();
  });

  it("call setOpenResultCard after successfully submit data", () => {
    const mockContext = {
      appState: {
        currentUser: "employer",
        employerInput: 1,
        employeeInput: 1,
      },
    };
    act(() => {
      renderResult = render(setup(mockContext));
    });

    expect(setOpenResultCard).toBeCalledTimes(1);
  });

  it("should change input fields value", () => {
    const mockContext = {
      appState: {
        currentUser: "employer",
        employerInput: 0,
        employeeInput: 0,
      },
    };

    act(() => {
      renderResult = render(setup(mockContext));
    });

    const employer = renderResult.baseElement.querySelector(
      "input[name='employer']"
    );

    fireEvent.change(employer, {
      target: { value: "1234" },
    });
    expect(employer.value).toBe("1234");
  });

  it("should submit the form and update context", () => {
    const mockContext = {
      appState: {
        currentUser: "employer",
        employerInput: 0,
        employeeInput: 0,
      },
      setAppState: setAppState,
    };

    act(() => {
      renderResult = render(setup(mockContext));
    });

    const employer = renderResult.baseElement.querySelector(
      "input[name='employer']"
    );
    fireEvent.change(employer, {
      target: { value: "1234" },
    });
    const submit = renderResult.baseElement.querySelector("button");
    act(() => {
      fireEvent.click(submit);
    });

    expect(setAppState).toBeCalledTimes(1);
  });
});
