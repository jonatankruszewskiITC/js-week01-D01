# JavaScript Day 1 Exercises

Hi! Congratulations on having forked your first github repository.
Today, you need to solve some JS challenges and push the changes to the master. Yay!

## Installation

You need to install Node.js first in your computer. Go to [Node.js](https://nodejs.org/en/download/) and download the latest LTS version (not current).

Then, in the project folder, open cmd (windows) or terminal (linux/max), run

```bash
npm install
```

## How to exercise

You have 7 exercises in this repo. Each exercise has it's own folder and file (for example, exercise 1 should be written in `D01/EX01/index.js`, and exercise 2 in `/D01/EX02/index.js` etc.)
We built an automated test for most of the exercises, to enable you check your result, and for us (instructors) to if you code works ok.

## Develop in the browser first

We recommend you first develop you exercise code in a separated html and js, and develop it in a browser environment, and then copy your code to the designate file, inside the right function.

## Use prebuilt automated tests

To test your code using our automated test, you can always run `npm test` in the cmd/terminal (make sure you are in the repo folder, where the `package.json` file is).

```bash
npm test
```

### Run individual tests

to execute each individual test (excluding exercise 6 and 7), you can execute a command with the following pattern

```bash
npm run testex[number_of_exercise]
```

for example to test exercise 3 you should execute

```bash
npm run testex3
```

Your objective for today is not only write the code that will do what is requested,
Also to do it on a way that it will pass the test.

# Important

You are not allowed to change the JS File names or modify the folder structure.
Do not change the tests files.

# Exercises instructions

1. In the JS file, fill in the function provided with one line of code that logs to the console “Hello World”.
   To test this exercise run: `npm run testex1`

2. That function, should accept one parameter (do not call it x, y.. Give it a real name). The code should print to the console “The number Y is bigger than 4” when the number is bigger than 4, or “the number Y is equal to 4” when the number is equal to 4, or “the number Y is less than 4” when the number is less than 4 (where Y is the value of your variable). Change the value to your variable, and check if you get the right output every time (do not forget to refresh the page after you change your code).
   To test this exercise run: `npm run testex2`

3. In the JS file, edit the function provided. Use as template your previous function. This function should accept two parameters instead of one, where the first one is the number to be compared and the second one the one to compare with. You need to compare the numbers, and according to the right situation print in the console: 'The number X is bigger than Y' or 'The number X is less than Y' or 'The number X is equal to Y'.
   To test this exercise run: `npm run testex3`

4. In the JS file, edit the function provided. Use as template your previous function. Extend your code, to print “The modulo of X % Y is Z”, only if X is bigger than Y, and if the module to X % Y isn’t zero. It still should print the previous lines in case X is less than Y or X equals Y.
   To test this exercise run: `npm run testex4`

5. In D01/EX05, in the JS file, edit the function provided. Use as template your previous function. Change your code to have only one console.log after all of the if-else statements (hint: use a string variable, and change it accordingly to the logic of your code).
   To test this exercise run: `npm run testex5`

6. In D01/EX06, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Instead of logging a string to the console, create a h3 tag with an id of ‘output’, and change the text of the tag according to the logic you implemented.
   This exercise does not have an automated test. Run it in your browser, and check the results.

7. In D01/EX07, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Add a new function that randomize the values of your two variables, using Math.random(), with the range of 1 - 100. Call to that function inside the other one instead of providing two parameters.
   This exercise does not have an automated test. Run it in your browser, and check the results.

```
888888 88b 88  88888  dP"Yb  Yb  dP      dP""b8  dP"Yb  8888b.  88 88b 88  dP""b8
88__   88Yb88     88 dP   Yb  YbdP      dP   `" dP   Yb  8I  Yb 88 88Yb88 dP   `"
88""   88 Y88 o.  88 Yb   dP   8P       Yb      Yb   dP  8I  dY 88 88 Y88 Yb  "88
888888 88  Y8 "bodP'  YbodP   dP         YboodP  YbodP  8888Y"  88 88  Y8  YboodP
```
