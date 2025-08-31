// characters.js

export const characters = [
  {
    name: "Dark Knight",
    image: "assets/characters/dark_knight.png",
    hp: 120,
    difficulty: 4,
    flavor: "A cursed warrior who draws power from pain.",
    abilities: [
      {
        name: "Life Drain",
        description: "Steal 20 HP from the enemy and heal self.",
        effect: (player, enemy) => {
          let drain = 20;
          enemy.hp -= drain;
          player.hp = Math.min(player.hp + drain, player.maxHp);
          return `${player.name} drains ${drain} HP from ${enemy.name}!`;
        }
      },
      {
        name: "Dark Slash",
        description: "Deal 30 damage, but lose 10 HP.",
        effect: (player, enemy) => {
          enemy.hp -= 30;
          player.hp -= 10;
          return `${player.name} slashes ${enemy.name}, dealing 30 damage but loses 10 HP.`;
        }
      }
    ]
  },
  {
    name: "Knight",
    image: "assets/characters/knight.png",
    hp: 150,
    difficulty: 3,
    flavor: "A loyal defender who thrives in battle.",
    abilities: [
      {
        name: "Shield Bash",
        description: "Deal 15 damage and stun the enemy.",
        effect: (player, enemy) => {
          enemy.hp -= 15;
          enemy.stunned = true;
          return `${player.name} bashes ${enemy.name}, dealing 15 damage and stunning them!`;
        }
      },
      {
        name: "Defensive Stance",
        description: "Reduce incoming damage by 50% for 1 turn.",
        effect: (player, enemy) => {
          player.defenseBoost = 0.5;
          return `${player.name} braces for impact, reducing incoming damage!`;
        }
      }
    ]
  },
  {
    name: "Paladin",
    image: "assets/characters/paladin.png",
    hp: 140,
    difficulty: 2,
    flavor: "A holy warrior who heals allies and smites foes.",
    abilities: [
      {
        name: "Holy Smite",
        description: "Deal 25 radiant damage.",
        effect: (player, enemy) => {
          enemy.hp -= 25;
          return `${player.name} smites ${enemy.name} for 25 radiant damage!`;
        }
      },
      {
        name: "Lay on Hands",
        description: "Heal self or ally for 30 HP.",
        effect: (player, target) => {
          target.hp = Math.min(target.hp + 30, target.maxHp);
          return `${player.name} heals ${target.name} for 30 HP!`;
        }
      }
    ]
  },
  {
    name: "Thief",
    image: "assets/characters/thief.png",
    hp: 100,
    difficulty: 3,
    flavor: "A nimble fighter who strikes fast and steals gold.",
    abilities: [
      {
        name: "Backstab",
        description: "Deal 35 damage if enemy is stunned, else 20.",
        effect: (player, enemy) => {
          let dmg = enemy.stunned ? 35 : 20;
          enemy.hp -= dmg;
          return `${player.name} backstabs ${enemy.name} for ${dmg} damage!`;
        }
      },
      {
        name: "Steal",
        description: "Steal 10 gold from the enemy.",
        effect: (player, enemy) => {
          let stolen = Math.min(enemy.gold || 0, 10);
          player.gold = (player.gold || 0) + stolen;
          enemy.gold = (enemy.gold || 0) - stolen;
          return `${player.name} steals ${stolen} gold from ${enemy.name}!`;
        }
      }
    ]
  },
  {
    name: "Witch",
    image: "assets/characters/witch.png",
    hp: 90,
    difficulty: 5,
    flavor: "A master of curses and fire magic.",
    abilities: [
      {
        name: "Fireball",
        description: "Deal 40 damage.",
        effect: (player, enemy) => {
          enemy.hp -= 40;
          return `${player.name} hurls a fireball at ${enemy.name} for 40 damage!`;
        }
      },
      {
        name: "Curse",
        description: "Reduce enemy attack by 50% for 2 turns.",
        effect: (player, enemy) => {
          enemy.attackDebuff = 0.5;
          enemy.debuffTurns = 2;
          return `${player.name} curses ${enemy.name}, weakening their attacks!`;
        }
      }
    ]
  }
];
