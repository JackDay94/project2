const btnMain = document.getElementsByClassName("btn");
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
            } else if (this.getAttribute('data-type') === 'difficulty') {
                loadCountdown();
            }
    })
})

/**
 * Loads the Time Attack HTML and hides the content
 * of the main menu
 */
function loadTimeAttack() {
    document.getElementById("main-menu").hidden = true;
    document.getElementById("time-attack-game").style.display = 'block';

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

    gameHeading.textContent = "Choose a Difficulty:";        
}

/**
 * Loads the Main menu HTML and hides the content
 * of other elements 
 */
function mainMenu() {
    document.getElementById("main-menu").hidden = false;
    document.getElementById("difficulty-select").style.display = 'none';
    document.getElementById("time-attack-game").style.display = 'none';
    document.getElementById("countdown-game").style.display = 'none';
    gameHeading.textContent = "Are you prepared to test your typing skills?";
    gameHeading.style.color = '#fff';
}

function runGame() {

}


function loadCountdown() {
    document.getElementById("difficulty-select").style.display = 'none';
    document.getElementById("countdown-game").style.display = 'block';

    gameHeading.textContent = "Countdown"
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

