const btnMain = document.getElementsByClassName("btn");
const btnStart = document.getElementById("btn-start");
let gameHeading = document.getElementById("game-heading");
let randomWord = document.getElementById("random-word");
let difficulty = document.getElementById("current-difficulty");

let remainingTime = document.getElementById("remaining-time");
const countdownTimeEasy = 8;
const countdownTimeMedium = 5;
const countdownTimeHard = 3;
const timeAttackTime = 60;
let gameStartTime;

const userAnswer = document.getElementById("answer");
let userScore = document.getElementById("current-score");
let highScore = document.getElementById("high-score");

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
    remainingTime.innerHTML = 0
    // Sets the score and high score to 0
    userScore.innerHTML = 0;
    highScore.innerHTML = 0;
    // Focus on the text box when game loads
    userAnswer.focus();
    // Disables the answer box to prevent input before game starts
    userAnswer.disabled = true;
    // Adds event listener for the user input 
    userAnswer.addEventListener("input", nextWord);
    // Stores the value of the start time 
    gameStartTime = timeAttackTime;  

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
    btnStart.disabled = false;
    btnStart.classList.remove('nohover');
}

/**
 * Clears the user input box and generates a new
 * random word
 */
function nextWord() {
    if (checkAnswer()) {
        generateWord();
        userAnswer.value = '';
    }
}

/**
 * Loads the Countdown game and hides the
 * difficulty select menu
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
    // Adds event listener for the user input
    userAnswer.addEventListener("input", nextWord);
}

function startGame() {
    if (gameStartTime === timeAttackTime) {
        remainingTime.innerHTML = 60;
    } else if (gameStartTime === countdownTimeEasy) {
        remainingTime.innerHTML = 8;
    } else if (gameStartTime === countdownTimeMedium) {
        remainingTime.innerHTML = 5;
    } else if (gameStartTime === countdownTimeHard) {
        remainingTime.innerHTML = 3;
    }
    userAnswer.disabled = false;
    btnStart.disabled = true;
    btnStart.classList.add('nohover')
}

function timer() {

}

function increaseTime() {

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

function increaseScore() {

}

function highScoreCheck() {

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
    gameStartTime = countdownTimeEasy;
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
    gameStartTime = countdownTimeMedium;
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
    gameStartTime = countdownTimeHard;
}