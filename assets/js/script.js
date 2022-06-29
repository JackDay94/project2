function runGame() {

}

function runTimeAttack() {
    const timeAttackButton = document.getElementById("btn-ta")

    timeAttackButton.addEventListener("click", function() {
        document.getElementById("main-menu").hidden = true;

        let timeAttackHeading = document.getElementById("game-heading");
        timeAttackHeading.textContent = "Time Attack";
        timeAttackHeading.style.color = "cadetblue"; }
    )
}

function difficultySelect() {
    const difficultySelectButton = document.getElementById("btn-cd")

    difficultySelectButton.addEventListener("click", function() {
        document.getElementById("difficulty-select").hidden = false;
        document.getElementById("main-menu").hidden = true;

        let difficultySelectHeading = document.getElementById("game-heading");
        difficultySelectHeading.textContent = "Choose a Difficulty:";

        document.getElementById("difficulty-select").innerHTML =  `
        <div id='difficulty-buttons'>
            <button type='button' id='btn-easy' class='btn-main btn-difficulty'>Easy</button>
            <button type='button' id='btn-med' class='btn-main btn-difficulty'>Medium</button>
            <button type='button' id='btn-hard' class='btn-main btn-difficulty'>Hard</button>
        </div>
        <div id='menu-button'>
            <button type='button' id='btn-menu' class='btn-main' onclick="mainMenu()">Main Menu</button>
        </div>
        `
    })
};

function runCountdown() {

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

function mainMenu() {
    const mainMenuButton = document.getElementById("btn-menu");

    mainMenuButton.addEventListener("click", function() {
        document.getElementById("main-menu").hidden = false;
        document.getElementById("difficulty-select").hidden = true;
        document.getElementById("game-heading").innerText = "Are you prepared to test your typing skills?";
    })
}