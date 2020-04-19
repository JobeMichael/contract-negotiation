import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("<App/>", () => {
  it("should render App ", () => {
    const { getByText, getByTestId } = render(<App />);
    const employeeTab = getByText("Employee");
    const employerTab = getByText("Employer");
    const submitBtn = getByText("Submit");
    const input = getByTestId("input-field");

    expect(employeeTab).toBeInTheDocument();
    expect(employerTab).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
