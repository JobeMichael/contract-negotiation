export default function validate({ employer, employee }) {
  let errors = {};
  const emptyMsg = "This field is required";
  const greatThanZeroMsg = "Add valid salary (min - 1)";

  if (!employer) {
    errors.employer = emptyMsg;
    return errors;
  } else if (Number(employer) < 1) {
    errors.employer = greatThanZeroMsg;
    return errors;
  }

  if (!employee) {
    errors.employee = emptyMsg;
    return errors;
  } else if (Number(employee) < 1) {
    errors.employee = greatThanZeroMsg;
    return errors;
  }
  return errors;
}
