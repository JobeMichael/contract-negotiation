import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ResultCard from "./ResultCard";

describe("<ResultCard/>", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it("renders ResultCard correctly", () => {
    const { asFragment } = render(
      <ResultCard employeeInput="2" employerInput="5" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders ResultCard with failure message", () => {
    const { getByText } = render(
      <ResultCard employeeInput="5" employerInput="2" />
    );
    const msg = getByText("Failure");

    expect(msg).toBeInTheDocument();
  });
});
