import { printHelloWorld } from "../../D01/EX01";
describe("Testing D01EX02", () => {
  test("Prints Hello World", () => {
    global.console = {
      log: jest.fn(),
    };
    printHelloWorld();
    expect(global.console.log).toHaveBeenCalledWith("Hello World");
  });
});
