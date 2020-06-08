import { compareNumbers } from "../../D01/EX03";
describe("Testing D01EX03", () => {
  global.console = {
    log: jest.fn(),
  };
  test("Number should be less than comparer", () => {
    compareNumbers(3, 5);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 3 is less than 5`
    );
  });
  test("Number should be more than comparer", () => {
    compareNumbers(5, 3);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 5 is bigger than 3`
    );
  });
  test("Number should equal comparer", () => {
    compareNumbers(4, 4);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 4 is equal to 4`
    );
  });
});
