import isDataSubmitted from "./isDataSubmitted";

describe("isDataSubmitted", () => {
  it("should return true if context has data", () => {
    const result = isDataSubmitted(1, 1, "employee");

    expect(result).toBeTruthy();
  });

  it("should return false if context has no data", () => {
    const result = isDataSubmitted(0, 0, "employee");

    expect(result).toBeFalsy();
  });
});
