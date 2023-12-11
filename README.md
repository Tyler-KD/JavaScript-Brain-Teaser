# JavaScript-Brain-Teaser

## Description

JavaScript Brain Teaser was created to quiz users on JavaScript fundamentals in a timed format that stores initials and high scores.  I built this project as a coding assessment to test my knowledge and understanding of JavaScript and Web APIs.  This project solves the problem of guaging progress compared to peers through stored initials and high scores.  Some things I learned throughout JavaScript Brain Teaser are the ability of methods to add or remove class attributes without CSS, using let declarations to re-assign block-scoped local variables, the mamy options available through array objects, and the understanding of local storage and how it can be used to save and retrieve data.

## Usage

When the page is loaded, the user is presented with a start page titled with the quiz and a short description.  After the user clicks the "Start" button, then a question page is opened with four options / answers to choose from with a 75 second timer countdown.  If the user answers correctly, then the next question opens up with a "Correct!" text underneath the question box.  If the user answers incorrectly, then the next question opens up with an "Incorrect!" text and a 15 second subtraction from the time remaining.  If the timer reaches 0 before finishing the the quiz, then the game is over and an after quiz page opens with a score of 0.  When the user finishes the quiz within time remaining, then the game is over and the after quiz page opens with a score and initials text-input.  Each score is the ammount of time remaining.  After entering initials within "Enter Initials" input and clicking the "Submit" button, a high scores list displays all of the saved initials with respective scores next to them.  This high scores list can be used to compare performance with previous results.

Attached is a screenshot of the webpage:

![JavaScript-Brain-Teaser Screenshot](</assets/images/JavaScript-Brain-Teaser-screenshot.png>)


## Deployed Site

## Credits

[Hide & Show](https://www.w3schools.com/w3js/w3js_hide.asp)

[Let Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

[Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

[setInterval () global function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

[appendChild () method](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

[JavaScript Template Literals](https://www.w3schools.com/JS//js_string_templates.asp)

[localStorage in JavaScript: A Complete Guide](https://blog.logrocket.com/localstorage-javascript-complete-guide/)

## License

MIT License

Copyright (c) 2023 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.