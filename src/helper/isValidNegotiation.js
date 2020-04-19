export default function isValidNegotiation(employee, employer) {
  if (Number(employee) >= Number(employer)) {
    return true;
  }
  return false;
}
