import { modulo } from "../D01/EX04";
describe("Testing D01EX04", () => {
  global.console = {
    log: jest.fn(),
  };
  test("Number Larger than comparer", () => {
    modulo(6, 3);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 6 is bigger than 3`
    );
  });
  test("Number Larger than comparer With modulo", () => {
    modulo(8, 3);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 8 is bigger than 3`
    );
    expect(global.console.log).toHaveBeenCalledWith(`The modulo of 8 % 3 is 2`);
  });
  test("Number should be less than comparer", () => {
    modulo(3, 5);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 3 is less than 5`
    );
  });
  test("Number should equal comparer", () => {
    modulo(4, 4);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 4 is equal to 4`
    );
  });
});
