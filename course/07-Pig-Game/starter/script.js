'use strict';

const score0Ele = document.getElementById('score--0');
const score1Ele = document.getElementById('score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');
const diceEle = document.querySelector('.dice');

const newGameEle = document.querySelector('.btn--new');
const rollEle = document.querySelector('.btn--roll');
const holdEle = document.querySelector('.btn--hold');

const player0ELe = document.querySelector('.player--0');
const player1ELe = document.querySelector('.player--1');

let currentPlayerTotal = 0;

let score = [0, 0];
let activePlayer = 0;

let playing = true;

rollEle.addEventListener('click', function () {
  if (playing) {
    const rollDiceNumber = Math.trunc(Math.random() * 6) + 1;

    diceEle.setAttribute(
      'src',
      `/course/07-Pig-Game/starter/dice-${rollDiceNumber}.png`
    );

    if (rollDiceNumber !== 1) {
      currentPlayerTotal += rollDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentPlayerTotal;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentPlayerTotal = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0ELe.classList.toggle('player--active');
      player1ELe.classList.toggle('player--active');
    }
  }
});

holdEle.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentPlayerTotal;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentPlayerTotal = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0ELe.classList.toggle('player--active');
      player1ELe.classList.toggle('player--active');
    }
  }
});
