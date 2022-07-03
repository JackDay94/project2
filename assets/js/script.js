const btnMain = document.getElementsByClassName("btn");
let gameHeading = document.getElementById("game-heading");
let randomWord = document.getElementById("random-word");

const words = [
    'alphabet',
    'apple',
    'actor',
    'apprentice',
    'associate',
    'acknowledge',
    'awesome',
    'astral',
    'aspire',
    'breathe',
    'biscuit',
    'bacon',
    'bounce',
    'basic',
    'broken',
    'bellow',
    'bravado',
    'button',
    'crazy',
    'constant',
    'critical',
    'consume',
    'cataclysm',
    'confident',
    'content',
    'calling',
    'daring',
    'destroy',
    'dangerous',
    'dystopia',
    'daunting',
    'dramatic',
    'decreed',
    'desire',
    'disection',
    'elephant',
    'europe',
    'elastic',
    'electric',
    'enormous',
    'enamour',
    'excited',
    'exhausted',
    'engineer',
    'essential',
    'frigid',
    'fascinating',
    'frightened',
    'fulfilling',
    'forever',
    'fever',
    'forget',
    'fighting',
    'frustrated',
    'floating',
    'friendly',
    'favourite',
    'finally',
    'garage',
    'greeting',
    'gastronomy',
    'golden',
    'gigantic',
    'gelatin',
    'gorgeous',
    'grief',
    'ghost',
    'giraffe',
    'government',
    'helpful',
    'horizon',
    'harmony',
    'hidden',
    'handsome',
    'highest',
    'harbinger',
    'honest',
    'helium',
    'heavenly',
    'hysterical',
    'human',
    'happiness',
    'incident',
    'inquisitive',
    'interior',
    'imagine',
    'instigate',
    'impossible',
    'impressive',
    'impersonate',
    'joking',
    'journey',
    'justice',
    'judicator',
    'jumping',
    'joined',
    'knowledge',
    'knight',
    'kingfisher',
    'kickboxing',
    'kineticist',
    'kilometer',
    'knockout',
    'kidnapper',
    'keyboard',
    'kindness',
    'kilogram',
    'knuckle',
    'laughing',
    'laundry',
    'leadership',
    'loneliness',
    'landscape',
    'leviathan',
    'luxury',
    'laughter',
    'learning',
    'location',
    'lifetime',
    'little',
    'lizard',
    'local',
    'large',
    'locus',
    'metal',
    'malicious',
    'meeting',
    'miracle',
    'mysterious',
    'mistake',
    'marvellous',
    'marketing',
    'meteorite',
    'meadow',
    'major',
    'mystery',
    'motive',
    'motor',
    'martial',
    'november',
    'nocturnal',
    'night',
    'notification',
    'notional',
    'negative',
    'neuron',
    'nuclear',
    'navigation',
    'nature',
    'narwhal',
    'number',
    'noxious',
    'needful',
    'optical',
    'ostrich',
    'optimal',
    'october',
    'outright',
    'octopus',
    'overgrowth',
    'overexpose',
    'omnipotent',
    'obsolete',
    'obstructive',
    'oncology',
    'otherwise',
    'often',
    'order',
    'penguin',
    'party',
    'pufferfish',
    'poltergeist',
    'pulsar',
    'politics',
    'positive',
    'princess',
    'patience',
    'portion',
    'proposal',
    'pilgrim',
    'people',
    'placebo',
    'portrait',
    'queen',
    'quarter',
    'quarry',
    'quadriceps',
    'question',
    'quagmire',
    'quartz',
    'quirky',
    'quest',
    'quitting',
    'quiet',
    'quickness',
    'robust',
    'rotate',
    'river',
    'ridiculous',
    'reverb',
    'recite',
    'register',
    'radiology',
    'reverse',
    'reduce',
    'running',
    'roaring',
    'rubbish',
    'regression',
    'religion',
    'sustain',
    'simple',
    'superstition',
    'suppose',
    'suitable',
    'segregate',
    'sully',
    'stereotype',
    'sarcrifice',
    'sickness',
    'salesman',
    'stimulate',
    'sarcophagus',
    'shorten',
    'sales',
    'speedy',
    'typer',
    'temper',
    'target',
    'template',
    'tougher',
    'tortoise',
    'telegraph',
    'television',
    'tundra',
    'thunder',
    'technology',
    'telephone',
    'tasteless',
    'tactical',
    'tutorial',
    'umbrella',
    'umbra',
    'unfortunate',
    'understand',
    'universe',
    'university',
    'unhappy',
    'uranium',
    'urgent',
    'unique',
    'unlock',
    'unending',
    'unstable',
    'underline',
    'ultimatum',
    'vertical',
    'vagrant',
    'vacation',
    'victory',
    'violet',
    'villain',
    'visit',
    'value',
    'voucher',
    'voracious',
    'verbatim',
    'vaccination',
    'violence',
    'vampire',
    'vapor',
    'volcano',
    'western',
    'willing',
    'wishful',
    'worry',
    'wildlife',
    'withdraw',
    'wireless',
    'watchtower',
    'waterworks',
    'whatever',
    'window',
    'wizard',
    'weapon',
    'website',
    'xylophone',
    'xylose',
    'xerography',
    'yellow',
    'yourself',
    'yield',
    'yawning',
    'younger',
    'yeast',
    'yearning',
    'yesterday',
    'yelling',
    'zoologist',
    'zebra',
    'zenith',
    'zephyr',
    'zeppelin',
    'zombie',
    'zipper'
];

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

function increaseScore () {

}

function highScore () {

}

