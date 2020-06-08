import { moduloEx7, getRandomInt } from "../../D01/EX07/D01-EX07";
describe("Testing D01EX07", () => {
  global.console = {
    warn: jest.fn(),
    log: jest.fn(),
  };
  test("RandomNumber", () => {
    for (let i = 0; i < 1000; ++i) {
      let randomNumber = getRandomInt(100);
      if (randomNumber > 100) {
        console.log(randomNumber)
        fail("The Random number was larger than 100");
      } else if (randomNumber < 1) {
        console.log(randomNumber)
        fail("The Random number was smaller than 1");
      }
    }
  });
});
