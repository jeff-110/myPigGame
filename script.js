'use strict';

// Selecting Elements 

const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const score1 = document.querySelector('#score--0')
const score2 = document.querySelector('#score--1')
const diceImg = document.querySelector('.dice')
const rollBtn = document.querySelector('.btn--roll')
const newBtn = document.querySelector('.btn--new')
const holdBtn = document.querySelector('.btn--hold')
const helpBtn = document.querySelector('.btn--help')
const closeBtn = document.querySelector('.btn--cl')
const currentPlayer1 = document.getElementById('current--0')
const currentPlayer2 = document.getElementById('current--1')


let currentScore, activePlayer, score, playing;

const initializ = function () {
    currentPlayer1.textContent = '0';
    currentPlayer2.textContent = '0';
    score1.textContent = '0'
    score2.textContent = '0'
    diceImg.classList.add('hidden')
    player1.classList.remove('player--winner')
    player2.classList.remove('player--winner')
    player1.classList.add('player--active')
    player2.classList.remove('player--active')

    currentScore = 0;
    activePlayer = 0;
    score = [0, 0]
    playing = true;
}
initializ();

// Player Changing
function playerChanging() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0

    // Background Changing
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}

// Rolling Dice 
rollBtn.addEventListener('click', function () {
    if (playing) {

        // 1.creat a random number
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2.Display Dice we have 6 images and according to Random number we show image we use image source plus that number for Example if number was 2 show image number 2 
        diceImg.classList.remove('hidden')
        diceImg.src = `dice-${dice}.png`

        // 3. If dice is one 
        if (dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            playerChanging();
        }

    }
})

holdBtn.addEventListener('click', function () {
    if (playing) {
        // 1.adding score
        score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        // 2.if score is 100 End Game 
        if (score[activePlayer] >= 100) {
            playing = false;
            diceImg.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            // if score is < 100 switch player
            playerChanging();
        }
    }
})


// Restarting The Game Botton

newBtn.addEventListener('click', initializ);

// Help bottom
helpBtn.addEventListener('click', function () {
    document.querySelector('.help-text').classList.remove('hidden')
    playing = false
})
closeBtn.addEventListener('click', function () {
    document.querySelector('.help-text').classList.add('hidden')
    playing = true


})