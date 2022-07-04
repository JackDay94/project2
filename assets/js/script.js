const btnMain = document.getElementsByClassName("btn");
let gameHeading = document.getElementById("game-heading");
let randomWord = document.getElementById("random-word");
let difficulty = document.getElementById("current-difficulty");

let remainingTime = document.getElementById("remaining-time");
const gameTimeEasy = 8;
const gameTimeMedium = 5;
const gameTimeHard = 3;
const timeAttack = 60;

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
            }
    })
    
    initializeTimer();
})

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
    generateWord(words);
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
}

function runGame() {

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
    gameHeading.textContent = "Countdown"
    // Generates a random word for the game
    generateWord(words);
}


function timer() {

}

function increaseTime() {

}

/**
 * Generates a random word from the words array
 * and displays it on the game
 */
function generateWord(words) {
    // Selects a random index from the words array
    const selectRandomWord = Math.floor(Math.random() * words.length);
    // Displays the text content of the random index
    randomWord.textContent = words[selectRandomWord];
}

function checkAnswer() {

}

function increaseScore() {

}

function highScoreCheck() {

}

function loadCountdownEasy() {
    remainingTime.innerHTML = gameTimeEasy;
    gameHeading.style.color = 'lightgreen';
    difficulty.style.color = 'lightgreen';
    difficulty.innerHTML = 'Easy';

}

function loadCountdownMedium() {
    remainingTime.innerHTML = gameTimeMedium;
    gameHeading.style.color = 'orange';
    difficulty.style.color = 'orange';
    difficulty.innerHTML = 'Medium';

}

function loadCountdownHard() {
    remainingTime.innerHTML = gameTimeHard;
    gameHeading.style.color = '#bb0721';
    difficulty.style.color = '#bb0721';
    difficulty.innerHTML = 'Hard';

}