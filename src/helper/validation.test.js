import validation from "./validation";

const emptyMsg = "This field is required";
const greatThanZeroMsg = "Add valid salary (min - 1)";

describe("validation", () => {
  it("should return required field error for employer if it is empty", () => {
    const result = validation({ employer: "" });

    expect(result.employer).toBe(emptyMsg);
  });

  it("should return required field error for employer if it is empty", () => {
    const result = validation({ employer: "1", employee: "" });

    expect(result.employee).toBe(emptyMsg);
  });

  it("should return amount incorrect error for employer, if it is less than 1", () => {
    const result = validation({ employer: "0", employee: "" });

    expect(result.employer).toBe(greatThanZeroMsg);
  });

  it("should return amount incorrect error for employee, if it is less than 1", () => {
    const result = validation({ employer: "2", employee: "0" });

    expect(result.employee).toBe(greatThanZeroMsg);
  });

  it("should return empty object if there is no error", () => {
    const result = validation({ employer: "2", employee: "5" });

    expect(result).toStrictEqual({});
  });
});
