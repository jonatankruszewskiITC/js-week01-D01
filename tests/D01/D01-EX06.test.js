import { moduloEx6 } from "../../D01/EX06/D01-EX06";

describe("Testing D01EX06", () => {
  global.console = {
    log: jest.fn(),
  };
  document.body.innerHTML = '<h3 id="output">Hello</h3>';
  test("Number Larger than comparer", () => {
    const outputElement = document.getElementById("output");
    const expected = "The number 9 is bigger than 3";
    outputElement.innerText = expected;
    moduloEx6(9, 3);
    expect(outputElement.innerText).toEqual(expected);
  });
  test("Number Larger than comparer With modulo", () => {
    const outputElement = document.getElementById("output");
    const expected =
      "The number 8 is bigger than 3. But the modulo of 8 % 3 is 2";
    outputElement.innerText = expected;
    moduloEx6(8, 3);
    expect(outputElement.innerText).toEqual(expected);
  });
  test("Number Larger than comparer With modulo", () => {
    const outputElement = document.getElementById("output");
    const expected =
      "The number 3 is less than 5";
    outputElement.innerText = expected;
    moduloEx6(3, 5);
    expect(outputElement.innerText).toEqual(expected);
  });
  test("Number should equal comparer", () => {
    const outputElement = document.getElementById("output");
    const expected =
      "The number 4 is equal to 4";
    outputElement.innerText = expected;
    moduloEx6(4, 4);
    expect(outputElement.innerText).toEqual(expected);
  });
});
