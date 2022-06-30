const btnMain = document.getElementsByClassName("btn");
const timeAttackButton = document.getElementById("btn-ta");
const difficultySelectButton = document.getElementById("btn-cd");
const mainMenuButton = document.getElementById("btn-menu");
let gameHeading = document.getElementById("game-heading");

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
            }
    })
})

/**
 * Loads the Time Attack HTML and hides the content
 * of the main menu
 */
function loadTimeAttack() {
        document.getElementById("main-menu").hidden = true;

        gameHeading.textContent = "Time Attack";
        gameHeading.style.color = "cadetblue";
}

/**
 * Loads the Difficulty select HTML and hides the
 * content of the main menu
 */
function loadDifficultySelect() {
        document.getElementById("difficulty-select").style.display = 'block';
        document.getElementById("main-menu").hidden = true;

        gameHeading = document.getElementById("game-heading");
        gameHeading.textContent = "Choose a Difficulty:";        
}

/**
 * Loads the Main menu HTML and hides the content
 * of other elements 
 */
function mainMenu() {
        document.getElementById("main-menu").hidden = false;
        document.getElementById("difficulty-select").style.display = 'none';
        gameHeading.textContent = "Are you prepared to test your typing skills?";
}

function runGame() {

}


function loadCountdown() {

}

function timer() {

}

function increaseTime() {

}

function generateWord() {

}

function checkAnswer() {

}

function increaseScore () {

}

function highScore () {

}

