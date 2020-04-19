import styled from "styled-components";

export const Modal = styled.div`
  min-width: 500px;
  background-color: white;
  position: fixed;
  top: 20%;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
  p {
    font-size: 20px;
  }
  a {
    align-self: flex-end;
    color: #004055;
    font-weight: bold;
    cursor: pointer;
  }

  .valid {
    color: green;
  }
  .failure {
    color: red;
  }
`;

export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const ModalFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: #29bdba;
  color: white;
  padding: 10px;
  text-align: right;
`;
