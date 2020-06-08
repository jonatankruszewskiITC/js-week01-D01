import { moduloEx5 } from "../../D01/EX05";
describe("Testing D01EX05", () => {
  global.console = {
    log: jest.fn(),
  };
  test("Number Larger than comparer", () => {
    moduloEx5(9, 3);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 9 is bigger than 3`
    );
  });
  test("Number Larger than comparer With modulo", () => {
    moduloEx5(8, 3);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 8 is bigger than 3. But the modulo of 8 % 3 is 2`
    );
  });
  test("Number should be less than comparer", () => {
    moduloEx5(3, 5);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 3 is less than 5`
    );
  });
  test("Number should equal comparer", () => {
    moduloEx5(4, 4);
    expect(global.console.log).toHaveBeenCalledWith(
      `The number 4 is equal to 4`
    );
  });
});
