# JavaScript Day 1 Exercises

Hi! Congratulations on having forked your first github repository.
Today, you need to solve some JS challenges and push the changes to the master. Yay!

## Installation

You need to install Node.js first in your computer. Go to [Node.js](https://nodejs.org/en/download/) and download the latest LTS version (not current).

Then, in the project folder, run

```bash
npm install
```

To do that, let's start by setting up your work environment.
JavaScript was built originally to be used in the browser.
But we are going to use it in another environment called NodeJS.
Why is that? Because we included you some Unit Tests for your code!
At any moment you will be able to run commands like

```bash
npm run testex3
```

and check that your code passes the tests!

Your objective for today is not only write the code that will do what is requested,
also to do it on a way that it will pass the test.

Let's set up the environment:

- Start writing your code in the proper files.
- To run a test for a specific exercise do:
  npm run test + ex + exercise number.
  For example, for ex 3:

```bash
npm run testex3
```

- To check your progress on the whole day, you can do `npm run testd1`

# Happy coding!

You are not allowed to change the JS File names or modify the folder structure.

1. In D01/EX01, create a website that runs the JS attached file. In that file, fill in the function provided with one line of code that logs to the console “Hello World”. Call that function. You should open devtools (in your browser), and go to the “console” tab and see the string you just logged.

To test this exercise run: `npm run testex1`

2. In D01/EX02, create a website that runs the JS attached file. In that file, edit the function provided. That function, should accept one parameter (do not call it x, y.. Give it a real name). The code should print to the console “The number Y is bigger than 4” when the number is bigger than 4, or “the number Y is equal to 4” when the number is equal to 4, or “the number Y is less than 4” when the number is less than 4 (where Y is the value of your variable). Change the value to your variable, and check if you get the right output every time (do not forget to refresh the page after you change your code).

To test this exercise run: `npm run testex2`

3. In D01/EX03, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. This function should accept two parameters instead of one, where the first one is the number to be compared and the second one the one to compare with. You need to compare the numbers, and according to the right situation print in the console:

The number X is bigger than Y
The number X is less than Y
The number X is equal to Y

E.g. you should have “The number Y is bigger than X” (where X is the value of your second variable).

To test this exercise run: `npm run testex3`

4. In D01/EX04, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Extend your code, to print “The modulo of X % Y is Z”, only if X is bigger than Y, and if the module to X % Y isn’t zero. It still should print the previous lines in case X is less than Y or X equals Y.

To test this exercise run: `npm run testex4`

5. In D01/EX05, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Change your code to have only one console.log after all of the if-else statements (hint: use a string variable, and change it accordingly to the logic of your code).

To test this exercise run: `npm run testex5`

6. In D01/EX06, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Instead of logging a string to the console, create a h3 tag with an id of ‘output’, and change the text of the tag according to the logic you implemented.

To test this exercise run: `npm run testex6`

7. In D01/EX07, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Add a new function that randomize the values of your two variables, using Math.random(), with the range of 1 - 100. Call to that function inside the other one instead of providing two parameters.

To test this exercise run: `npm run testex7`

To run tests in the whole folder: `npm run test`
