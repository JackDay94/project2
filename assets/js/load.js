// Load functions

/*
Adds Event Listeners to the buttons when DOM
content is loaded. Then runs the functions
operating the buttons when they are clicked
*/
document.addEventListener('DOMContentLoaded', function() {
    for (let btns of btnMain)

        btns.addEventListener("click", function(event) {
            event.preventDefault();
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
    checkScore();
});

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
    userScore.innerHTML = 0;
    difficulty.innerHTML = null;
    gameMode = null;
}

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
    gameHeading.style.color = "#94B9AF";
    // Generates a random word for the game
    generateWord();
    // Sets the initial time to 0 on load
    remainingTime.innerHTML = 0;
    // Sets the score to 0
    userScore.innerHTML = 0;
    // Sets the high score from the local storage
    highScore.innerHTML = parseInt(localStorage.getItem("timeAttackHighScore"));
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
    // Sets the score to 0
    userScore.innerHTML = 0;
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
 * Loads the countdown game in easy difficulty
 */
function loadCountdownEasy() {
    // Changes styles and html for easy
    gameHeading.style.color = 'lightgreen';
    difficulty.style.color = 'lightgreen';
    difficulty.innerHTML = 'Easy';
    // Stores the value of the start time 
    gameStartTime = gameTimes.easy;
    // Displays high score from local storage
    highScore.innerHTML = parseInt(localStorage.getItem("easyHighScore"));
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
    // Displays high score from local storage
    highScore.innerHTML = parseInt(localStorage.getItem("mediumHighScore"));
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
    // Displays high score from local storage
    highScore.innerHTML = parseInt(localStorage.getItem("hardHighScore"));
}