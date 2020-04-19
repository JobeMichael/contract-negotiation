import React, { useContext, useEffect } from "react";
import isDataSubmitted from "../../helper/isDataSubmitted";
import validate from "../../helper/validation";
import useForm from "../../hooks/useForm";
import { appContext } from "../../store/appContext";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import * as Styled from "./NegotiationForm.styles";

const NegotiationForm = ({ setOpenResultCard }) => {
  const {
    appState: { currentUser, employerInput, employeeInput },
  } = useContext(appContext);
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  useEffect(() => {
    if (employeeInput > 0 && employerInput > 0) {
      setOpenResultCard(true);
    }
  }, [employeeInput, employerInput, setOpenResultCard]);

  const hideField = isDataSubmitted(employerInput, employeeInput, currentUser);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Styled.FieldWrapper>
          {hideField ? (
            <Styled.InfoPanel>Data submitted</Styled.InfoPanel>
          ) : (
            <>
              <Input
                name={currentUser}
                type="number"
                label="Amount"
                value={values[currentUser] || ""}
                onChange={handleChange}
                errorMsg={errors[currentUser]}
                data-testid="input-field"
              />
              <Button>Submit</Button>
            </>
          )}
        </Styled.FieldWrapper>
      </form>
    </div>
  );
};

export default NegotiationForm;
