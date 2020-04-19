import { render } from "@testing-library/react";
import React from "react";
import Input from "./Input";

const testProps = {
  label: "Amount",
  name: "amount",
};

describe("<Input/>", () => {
  it("renders Input correctly", () => {
    const { asFragment } = render(<Input {...testProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Input with error", () => {
    const { asFragment } = render(
      <Input {...{ ...testProps, errorMsg: "error" }} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
