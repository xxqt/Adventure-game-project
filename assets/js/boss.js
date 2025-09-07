// -------------------------
// Player setup
// -------------------------
const params = new URLSearchParams(window.location.search);
const charData = params.get("character");

if (charData) {
    const character = JSON.parse(decodeURIComponent(charData));
    playerHP = character.hp;
    playerAbilities = character.abilities;
    playerName = character.name;
}

// -------------------------
// Enemy setup
// -------------------------
const enemyList = enemies.enemies;
const randomEnemy = enemyList[Math.floor(Math.random() * enemyList.length)];

let enemyName = randomEnemy.name;
let enemyHP = randomEnemy.hp;
const enemyAbilities = randomEnemy.abilities;
let enemyImage = randomEnemy.animations.idle;
const enemyFlavor = randomEnemy.flavor;

document.getElementById('enemy-name').textContent = enemyName;
document.getElementById('enemy-hp').textContent = enemyHP;
document.getElementById('battleText').textContent = `A wild ${enemyName} appears! ${enemyFlavor}`;
document.getElementById('enemy-image').src = enemyImage;

// -------------------------
// Initialize displays
// -------------------------
document.getElementById('player-name').textContent = playerName;
document.getElementById('player-hp').textContent = playerHP;

const buttons = document.querySelectorAll('.attack-btn');
buttons.forEach((btn, index) => {
    if (playerAbilities[index]) {
        btn.textContent = playerAbilities[index].name;
    }
});

// -------------------------
// Display update functions
// -------------------------
function updateEnemyDisplay() {
    document.getElementById('enemy-hp').textContent = enemyHP;
    document.getElementById('enemy-image').src = enemyImage;
}

function updatePlayerDisplay() {
    document.getElementById('player-hp').textContent = playerHP;
}

// -------------------------
// Battle logic functions
// -------------------------
function move(name, damage, heal) {
    playerHP += heal;
    enemyHP -= damage;

    if (playerHP < 0) playerHP = 0;
    if (enemyHP < 0) enemyHP = 0;

    document.getElementById('battleText').innerText =
        `Player used ${name}! Deals ${damage} damage, heals ${heal}.`;

    updateEnemyDisplay();
    updatePlayerDisplay();
}

function enemyMove(name, damage, heal) {
    enemyHP += heal;
    playerHP -= damage;

    if (playerHP < 0) playerHP = 0;
    if (enemyHP < 0) enemyHP = 0;

    document.getElementById('battleText').innerText =
        `Enemy used ${name}! Deals ${damage} damage, heals ${heal}.`;

    updateEnemyDisplay();
    updatePlayerDisplay();
}

// -------------------------
// Attack logic
// -------------------------
function playerAttack(index) {
    if (!playerAbilities[index]) return;

    const ability = playerAbilities[index];
    move(ability.name, ability.damage, ability.heal);

    if (enemyHP <= 0) {
        enemyImage = randomEnemy.animations.death;
        updateEnemyDisplay();
        checkBattleOutcome();
        return;
    }

    // Enemy counterattack
    setTimeout(() => {
        enemyImage = randomEnemy.animations.attack;
        updateEnemyDisplay();

        setTimeout(() => {
            const enemyAbility = enemyAbilities[Math.floor(Math.random() * enemyAbilities.length)];
            enemyMove(enemyAbility.name, enemyAbility.damage, enemyAbility.heal);

            setTimeout(() => {
                enemyImage = randomEnemy.animations.idle;
                updateEnemyDisplay();
                checkBattleOutcome();
            }, 500);
        }, 1000);
    }, 500);
}

function checkBattleOutcome() {
    if (playerHP <= 0) {
        document.getElementById('battleText').innerText = "You were defeated!";
    } else if (enemyHP <= 0) {
        enemyImage = randomEnemy.animations.death;
        updateEnemyDisplay();
        document.getElementById('battleText').innerText = `You defeated the ${enemyName}!`;
    }
}
