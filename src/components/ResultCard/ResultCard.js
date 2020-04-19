import React from "react";
import currencyFormat from "../../helper/currencyFormatter";
import isValidNegotiation from "../../helper/isValidNegotiation";
import ModalContainer from "../ModalContainer/ModalContainer";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Wrapper } from "./ResultCard.styles";

const ResultCard = ({ closeCardHandler, employerInput, employeeInput }) => {
  return (
    <ModalContainer setOpen={closeCardHandler}>
      <>
        <WeatherCard />

        <Wrapper>
          {isValidNegotiation(employerInput, employeeInput) ? (
            <h2 className="valid">Success</h2>
          ) : (
            <h2 className="failure">Failure</h2>
          )}
        </Wrapper>
        <p>
          Maximum Offer was <b>{currencyFormat(employerInput)}</b>
        </p>
        <p>
          Minimum expected salary was <b>{currencyFormat(employeeInput)}</b>
        </p>
      </>
    </ModalContainer>
  );
};

export default ResultCard;
