const btnMain = document.getElementsByClassName("btn");
const btnStart = document.getElementById("btn-start");
let gameHeading = document.getElementById("game-heading");
let randomWord = document.getElementById("random-word");
let difficulty = document.getElementById("current-difficulty");

let remainingTime = document.getElementById("remaining-time");
const gameTimes = {
    easy: 8,
    medium: 5,
    hard: 3,
    timeAttack: 60
};

let gameStartTime;

const userAnswer = document.getElementById("answer");
let userScore = document.getElementById("current-score");
let highScore = document.getElementById("high-score");

let timer;
let gameMode;

/*
Adds Event Listeners to the buttons when DOM
content is loaded. Then runs the functions
operating the buttons when they are clicked
*/
document.addEventListener('DOMContentLoaded', function() {
    for (let btns of btnMain)

        btns.addEventListener("click", function() {
            if (this.getAttribute('data-type') === 'game-mode-ta') {
                loadTimeAttack();
            } else if (this.getAttribute('data-type') === 'game-mode-cd') {
                loadDifficultySelect();
            } else if (this.getAttribute('data-type') === 'game-menu') {
                mainMenu();
            } else if (this.getAttribute('data-type') === 'difficulty') {
                loadCountdown();
                if (this.getAttribute('id') === 'btn-easy') {
                    loadCountdownEasy();
                } else if (this.getAttribute('id') === 'btn-med') {
                    loadCountdownMedium();
                } else if (this.getAttribute('id') === 'btn-hard') {
                    loadCountdownHard();
                }
            } else if (this.getAttribute('data-type') === 'start') {
                startGame();
            }
    });
});

/**
 * Loads the Time Attack game and hides the content
 * of the main menu
 */
function loadTimeAttack() {
    // Hides the main menu and difficulty and displays the game
    document.getElementById("main-menu").hidden = true;
    document.getElementById("game").style.display = 'block';
    document.getElementById("difficulty").hidden = true;
    // Changes the heading to Time Attack
    gameHeading.textContent = "Time Attack";
    gameHeading.style.color = "cadetblue";
    // Generates a random word for the game
    generateWord();
    // Sets the initial time to 0 on load
    remainingTime.innerHTML = 0;
    // Sets the score and high score to 0
    userScore.innerHTML = 0;
    highScore.innerHTML = 0;
    // Focus on the text box when game loads
    userAnswer.focus();
    // Disables the answer box to prevent input before game starts
    userAnswer.disabled = true;
    // Enables the start button on load
    btnStart.disabled = false;
    // Adds event listener for the user input 
    userAnswer.addEventListener("input", nextWord);
    // Stores the value of the start time 
    gameStartTime = gameTimes.timeAttack;
    // Sets the value of the game mode
    gameMode = 'Time Attack';  
}

/**
 * Loads the Difficulty select menu and hides the
 * content of the main menu
 */
function loadDifficultySelect() {
    // Hides the main menu and displays the difficulty select
    document.getElementById("difficulty-select").style.display = 'block';
    document.getElementById("main-menu").hidden = true;
    // Changes the heading to Choose a difficulty
    gameHeading.textContent = "Choose a Difficulty:";        
}

/**
 * Loads the Main menu and hides the content of
 * other elements 
 */
function mainMenu() {
    // Hides the other elements and displays the main menu elements
    document.getElementById("main-menu").hidden = false;
    document.getElementById("difficulty-select").style.display = 'none';
    document.getElementById("game").style.display = 'none';
    // Changes the heading content back to the main menu heading
    gameHeading.textContent = "Are you prepared to test your typing skills?";
    gameHeading.style.color = '#fff';
    // Clears the input box
    userAnswer.value = '';
    // Clears all game values
    remainingTime.innerHTML = null;
    randomWord.innerHTML = null;
    userScore.innerHTML = null;
    highScore.innerHTML = null;
    difficulty.innerHTML = null;
    gameMode = null;
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
 * Loads the Countdown game and hides the
 * difficulty select menu.
 */
function loadCountdown() {
    // Hides the difficulty select and displays the game and difficulty
    document.getElementById("difficulty-select").style.display = 'none';
    document.getElementById("game").style.display = 'block';
    document.getElementById("difficulty").hidden = false;
    // Changes the heading to countdown
    gameHeading.textContent = "Countdown";
    // Generates a random word for the game
    generateWord();
    // Sets the starting time to 0 on load
    remainingTime.innerHTML = 0;
    // Sets the score and high score to 0
    userScore.innerHTML = 0;
    highScore.innerHTML = 0;
    // Focus on the text box when game loads
    userAnswer.focus();
    // Disables the answer box to prevent input before game starts
    userAnswer.disabled = true;
    // Enables the start button on load
    btnStart.disabled = false;
    // Adds event listener for the user input
    userAnswer.addEventListener("input", nextWord);
    // Sets the value of the game mode
    gameMode = 'Countdown';
}

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
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
    if (userScore.innerHTML > highScore.innerHTML) {
        highScore.innerHTML = userScore.innerHTML;
    }
}

/**
 * Loads the countdown game in easy difficulty
 */
function loadCountdownEasy() {
    // Changes styles and html for easy
    gameHeading.style.color = 'lightgreen';
    difficulty.style.color = 'lightgreen';
    difficulty.innerHTML = 'Easy';
    // Stores the value of the start time 
    gameStartTime = gameTimes.easy;
}

/**
 * Loads the countdown game in medium difficulty
 */
function loadCountdownMedium() {
    // Changes styles and html for medium
    gameHeading.style.color = 'orange';
    difficulty.style.color = 'orange';
    difficulty.innerHTML = 'Medium';
    // Stores the value of the start time 
    gameStartTime = gameTimes.medium;
}

/**
 * Loads the countdown game in hard difficulty
 */
function loadCountdownHard() {
    // Changes styles and html for hard
    gameHeading.style.color = '#bb0721';
    difficulty.style.color = '#bb0721';
    difficulty.innerHTML = 'Hard';
    // Stores the value of the start time
    gameStartTime = gameTimes.hard;
}