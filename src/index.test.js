import { getPercents } from "./index.js";


describe("tests for getPercents function", () => {
  it("30 persent of 100 to equal 60", () => {
    const result = getPercents(30, 200);
    expect(result).toBe(60);
  });
});