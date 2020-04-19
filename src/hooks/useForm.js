import { useContext, useEffect, useState } from "react";
import { appContext } from "../store/appContext";

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    appState: { currentUser, employerInput, employeeInput },
    setAppState,
  } = useContext(appContext);

  useEffect(() => {
    if (!errors[currentUser] && isSubmitting) {
      setAppState((prevState) => ({
        ...prevState,
        [`${currentUser}Input`]: values[currentUser],
      }));
    }
    setIsSubmitting(false);
  }, [errors, currentUser, setAppState, isSubmitting, values]);

  useEffect(() => {
    if (employeeInput > 0 && employerInput > 0) {
      reset();
    }
  }, [employeeInput, employerInput]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const reset = () => {
    setValues({ employee: "", employer: "" });
  };

  return {
    handleChange,
    handleSubmit,
    setValues,
    reset,
    values,
    errors,
  };
};

export default useForm;
