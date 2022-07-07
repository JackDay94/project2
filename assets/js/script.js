// Global variables

const gameTimes = {
    easy: 8,
    medium: 5,
    hard: 3,
    timeAttack: 60
};
let gameStartTime;
let timer;
let gameMode;

// DOM elements
const btnMain = document.getElementsByClassName("btn");
const btnStart = document.getElementById("btn-start");
const gameHeading = document.getElementById("game-heading");
const randomWord = document.getElementById("random-word");
const difficulty = document.getElementById("current-difficulty");
const userAnswer = document.getElementById("answer");
const userScore = document.getElementById("current-score");
const highScore = document.getElementById("high-score");
const remainingTime = document.getElementById("remaining-time");

// Game Functions

/**
 * Starts the game by setting the timer and beginning
 * the countdown. Generates a new word, enables
 * the input box and resets the score to 0.
 */
function startGame() {
    // Sets the timer interval to every second
    timer = setInterval(updateTimer, 1000);
    // Sets the starting value of the timer
    if (gameStartTime === gameTimes.timeAttack) {
        remainingTime.innerHTML = gameTimes.timeAttack;
    } else if (gameStartTime === gameTimes.easy) {
        remainingTime.innerHTML = gameTimes.easy;
    } else if (gameStartTime === gameTimes.medium) {
        remainingTime.innerHTML = gameTimes.medium;
    } else if (gameStartTime === gameTimes.hard) {
        remainingTime.innerHTML = gameTimes.hard;
    }
    // Enables the input box and disables the start button
    userAnswer.disabled = false;
    userAnswer.value = '';
    userAnswer.focus();
    btnStart.disabled = true;
    btnStart.classList.add('nohover');
    // Sets the score to 0
    userScore.innerHTML = 0;
    // Generates a new random word
    generateWord();
}

/**
 * Decrements the time and checks if it has reached 0.
 * Ends the game when the timer is 0 and clears the timer
 * interval.
 */
function updateTimer() {
    // Decrements the time if it is greater than 0
    if (remainingTime.innerHTML > 0) {
        remainingTime.innerHTML--;
    /* If the time is 0, enables the start button and
    disables the input. Clears the timer interval. */    
    } else if (parseInt(remainingTime.innerHTML) === 0) {
        btnStart.disabled = false;
        btnStart.classList.remove('nohover');
        userAnswer.disabled = true;
        clearInterval(timer);
    }
}

/**
 * Increases the time by 2 seconds for countdown game mode.
 */
 function increaseTime() {
    if (gameMode === 'Countdown') {
        remainingTime.innerHTML = parseInt(remainingTime.innerHTML) + 2;
    } 
}

/**
 * Generates a random word from the words array
 * and displays it on the game
 */
function generateWord() {
    // Selects a random index from the words array
    const selectRandomWord = Math.floor(Math.random() * words.length);
    // Displays the text content of the random index
    randomWord.textContent = words[selectRandomWord];
}

/**
 * Checks if the user input matches the random word
 * and returns a value if true
 */
function checkAnswer() {
    if (userAnswer.value === randomWord.innerHTML) {
        return true;
    } else {
        return false;
    }
}

/**
 * Increases the score by 1 and adds 1 to the high score 
 * if the high score has been beaten.
 */
function increaseScore() {
    // Increases the user score by 1
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
    // Checks if user score is greater than high score and matches them
    if (parseInt(userScore.innerHTML) > parseInt(highScore.innerHTML)) {
        highScore.innerHTML = userScore.innerHTML;
        // Sets the local storage high score depending on game mode
        if(gameStartTime === gameTimes.timeAttack) {
            localStorage.setItem("timeAttackHighScore", highScore.innerHTML);
        } else if (gameStartTime === gameTimes.easy) {
            localStorage.setItem("easyHighScore", highScore.innerHTML);
        } else if (gameStartTime === gameTimes.medium) {
            localStorage.setItem("mediumHighScore", highScore.innerHTML);
        } else if (gameStartTime === gameTimes.hard) {
            localStorage.setItem("hardHighScore", highScore.innerHTML);
        }
    }
}

/**
 * Clears the user input box, generates a new
 * random word and increases the score.
 */
 function nextWord() {
    if (checkAnswer()) {
        generateWord();
        userAnswer.value = '';
        increaseScore();
        increaseTime();
    } 
}

/**
 * Checks the high score local storage and stops
 * the values returning null
 */
function checkScore() {
    if(localStorage.getItem("timeAttackHighScore") === null) {
        highScore.innerHTML = 0;
        localStorage.setItem("timeAttackHighScore", highScore.innerHTML);
    } else {
        highScore.innerHTML = parseInt(localStorage.getItem("timeAttackHighScore"));
    }
    if(localStorage.getItem("easyHighScore") === null) {
        highScore.innerHTML = 0;
        localStorage.setItem("easyHighScore", highScore.innerHTML);
    } else {
        highScore.innerHTML = parseInt(localStorage.getItem("easyHighScore"));
    }
    if(localStorage.getItem("mediumHighScore") === null) {
        highScore.innerHTML = 0;
        localStorage.setItem("mediumHighScore", highScore.innerHTML);
    } else {
        highScore.innerHTML = parseInt(localStorage.getItem("mediumHighScore"));
    }
    if(localStorage.getItem("hardHighScore") === null) {
        highScore.innerHTML = 0;
        localStorage.setItem("hardHighScore", highScore.innerHTML);
    } else {
        highScore.innerHTML = parseInt(localStorage.getItem("hardHighScore"));
    }
}