import React from "react";
import * as Styled from "./Input.styles";

const Input = ({ label, name, errorMsg, ...rest }) => {
  return (
    <Styled.Filed>
      <label>{label}</label>
      <div>
        <input
          name={name}
          autoComplete="off"
          className="input-element"
          {...rest}
        />
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </Styled.Filed>
  );
};

export default Input;
