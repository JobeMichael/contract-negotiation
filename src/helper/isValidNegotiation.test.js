import isValidNegotiation from "./isValidNegotiation";

describe("isValidNegotiation", () => {
  it("should be valid negotiation", () => {
    const result = isValidNegotiation(100, 50);

    expect(result).toBeTruthy();
  });

  it("shouldn't be a valid negotiation if employee input is greater than employee", () => {
    const result = isValidNegotiation(50, 100);

    expect(result).toBeFalsy();
  });
});
