export default function isDataSubmitted(
  employerInput,
  employeeInput,
  currentUser
) {
  if (
    (employerInput && currentUser === "employer") ||
    (employeeInput && currentUser === "employee")
  ) {
    return true;
  }
  return false;
}
