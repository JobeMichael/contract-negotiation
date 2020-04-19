import styled from "styled-components";

export const Filed = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-right: 8px;
    align-self: baseline;
    text-transform: uppercase;
    font-weight: 700;
  }

  input {
    outline: none;
    border: 2px solid #29bdba;
    background-color: transparent;
    font-size: 20px;
    padding: 6px 10px;
    display: block;
    width: 250px;
    box-sizing: border-box;
    font-weight: 700;
    margin-top: 12px;
    line-height: 1.5;
  }

  input:focus {
    outline: none;
  }

  input.invalid {
    border: 2px solid red;
    background-color: #fda49a;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  p {
    position: absolute;
    margin: 0;
    font-size: 12px;
    margin-top: 6px;
    font-weight: 600;
    color: red;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;
