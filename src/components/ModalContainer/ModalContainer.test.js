import { act, fireEvent, render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ModalContainer from "./ModalContainer";

describe("<ModalContainer/>", () => {
  const close = jest.fn();

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
    close.mockRestore();
  });

  let renderResult;

  const setup = () => (
    <ModalContainer setOpen={close}>
      <span>Children</span>
    </ModalContainer>
  );

  it("renders Modal properly", () => {
    act(() => {
      renderResult = render(setup());
    });

    expect(renderResult.baseElement).toMatchSnapshot();
  });

  it("calls close button", () => {
    act(() => {
      renderResult = render(setup());
    });

    const closeButton = renderResult.baseElement.querySelector("a");
    fireEvent.click(closeButton);

    expect(close).toBeCalledTimes(1);
  });
});
