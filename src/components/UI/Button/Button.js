import React from "react";
import * as Styled from "./Button.styled";

const button = ({ disabled, children }) => (
  <Styled.Button
    data-testid="button-submit"
    type="submit"
    className="button"
    disabled={disabled}
  >
    {children}
  </Styled.Button>
);

export default button;
