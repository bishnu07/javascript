"use strict";

// const number = document.querySelector(".number");
// const message = document.querySelector(".message");
// const scoreElement = document.querySelector(".score");
// const highscoreElement = document.querySelector(".highscore");
// const guessInput = document.querySelector(".guess");
// const checkButton = document.querySelector(".check");

// let score = 20;
// let highscore = 0;
// let randomNumber = generateRandomNumber();

// function generateRandomNumber() {
//   return Math.trunc(Math.random() * 20) + 1;
// }

// function displayMessage(msg) {
//   message.textContent = msg;
// }

// function updateScore(newScore) {
//   score = newScore;
//   scoreElement.textContent = score;
// }

// function displayNumber(givenNumber) {
//   number.textContent = "" + givenNumber;
// }

// checkButton.addEventListener("click", function () {
//   const guess = Number(guessInput.value);

//   if (!guess) {
//     displayMessage("Please enter a number");
//   } else if (guess === randomNumber) {
//     console.log(randomNumber);
//     document.querySelector(".number").textContent = randomNumber;
//     displayNumber(randomNumber);
//     displayMessage("Correct number");

//     if (score > highscore) {
//       highscore = score;
//       highscoreElement.textContent = highscore;
//     }
//   } else if (guess !== randomNumber) {
//     if (score > 1) {
//       displayMessage(guess > randomNumber ? "Too high" : "Too low");
//       updateScore(score - 1);
//     } else {
//       displayMessage("You lost the game!");
//       updateScore(0);
//     }
//   }
// });

// const str = "hello";

// function reverseStr(val) {
//   if (val.length === 0) return "";

//   return val[val.length - 1] + reverseStr(val.slice(0, val.length - 1));
// }

// console.log(reverseStr(str));

// (function () {
//   const text = document.getElementsByTagName("h3")[0];
//   text.style.color = "red";

const arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(-3));

const str = "vishnu";
console.log(str.padStart(str.length + 5, "*"));
