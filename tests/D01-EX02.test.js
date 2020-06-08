import { isBiggerThan } from "../../D01/EX02";
describe("Testing D01EX02", () => {
  global.console = {
    log: jest.fn(),
  };
  test("Number should be less than 4", () => {
    isBiggerThan(3);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 3 is less than 4`
    );
  });
  test("Number should be more than 4", () => {
    isBiggerThan(5);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 5 is bigger than 4`
    );
  });
  test("Number 4 should equal 4", () => {
    isBiggerThan(4);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 4 is equal to 4`
    );
  });
});
