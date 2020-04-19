import currencyFormatter from "./currencyFormatter";

describe("currencyFormatter", () => {
  it("should format currency in correct format", () => {
    const formattedCurrency = currencyFormatter("12345");

    expect(formattedCurrency).toBe("$ 12,345");
  });
});
