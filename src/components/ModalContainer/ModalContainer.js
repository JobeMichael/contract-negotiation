import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./ModalContainer.styles";

const ModalContainer = ({ setOpen, children }) => {
  const close = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      <Styled.ModalShadow onClick={close} />
      <Styled.Modal>
        <Styled.ModalBanner>
          <a onClick={close}>Close</a>
        </Styled.ModalBanner>
        <Styled.ModalContent>{children}</Styled.ModalContent>
      </Styled.Modal>
    </>,
    document.getElementById("app-modal")
  );
};

export default ModalContainer;
