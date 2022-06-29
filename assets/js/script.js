function runGame() {

}

function runTimeAttack() {
    document.getElementById("main-menu").hidden = true;

    let timeAttackHeading = document.getElementById("game-heading");
    timeAttackHeading.textContent = "Time Attack";
    timeAttackHeading.style.color = "cadetblue";

}

function difficultySelect() {
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
        <button type='button' id='btn-menu' class='btn-main'>Main Menu</button>
    </div>`
}

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

}