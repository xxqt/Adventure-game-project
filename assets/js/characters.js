// js/characters.js
const data = {
  "characters": [
    {
      "name": "Dark Knight",
      "image": "../assets/characters/dark_knight.png",
      "maxHp": 120,
      "currentHp": 120,
      "gold": 300,
      "difficulty": 4,
      "flavor": "A cursed warrior who draws power from pain.",
      "abilities": [
        {
          "name": "Life Drain",
          "damage": 20,
          "heal": 20,
          "description": "Steal 20 HP from the enemy and heal self."
        },
        {
          "name": "Dark Slash",
          "damage": 30,
          "heal": -10,
          "description": "Deal 30 damage, but lose 10 HP."
        }
      ]
    },
    {
      "name": "Witch",
      "image": "../assets/characters/witch.png",
      "maxHp": 90,
      "currentHp": 90,
      "gold": 60,
      "difficulty": 5,
      "flavor": "A master of curses and fire magic.",
      "abilities": [
        {
          "name": "Fireball",
          "damage": 40,
          "heal": 0,
          "description": "Deal 40 damage."
        },
        {
          "name": "Curse",
          "damage": 50,
          "heal": -10,
          "description": "Unleash a powerful curse dealing 50 damage."
        }
      ]
    },
    {
      "name": "Knight",
      "image": "../assets/characters/knight.png",
      "maxHp": 150,
      "currentHp": 150,
      "gold": 40,
      "difficulty": 2,
      "flavor": "A noble warrior with unwavering defense.",
      "abilities": [
        {
          "name": "Shield Bash",
          "damage": 15,
          "heal": 0,
          "description": "Stun the enemy and deal 15 damage."
        },
        {
          "name": "Guardian's Oath",
          "damage": 0,
          "heal": 30,
          "description": "Heal 30 HP by calling upon inner strength."
        }
      ]
    },
    {
      "name": "Paladin",
      "image": "../assets/characters/paladin.png",
      "maxHp": 130,
      "currentHp": 130,
      "gold": 70,
      "difficulty": 3,
      "flavor": "A holy knight blessed with divine powers.",
      "abilities": [
        {
          "name": "Holy Strike",
          "damage": 25,
          "heal": 0,
          "description": "Smite the enemy with holy light for 25 damage."
        },
        {
          "name": "Divine Blessing",
          "damage": 0,
          "heal": 40,
          "description": "Restore 40 HP with divine energy."
        }
      ]
    },
    {
      "name": "Thief",
      "image": "../assets/characters/thief.png",
      "maxHp": 100,
      "currentHp": 100,
      "gold": 100,
      "difficulty": 4,
      "flavor": "A swift rogue who relies on agility and cunning.",
      "abilities": [
        {
          "name": "Backstab",
          "damage": 35,
          "heal": 0,
          "description": "Deal 35 damage with a precise strike."
        },
        {
          "name": "Steal",
          "damage": 10,
          "heal": 10,
          "description": "Steal 10 HP and small loot from the enemy."
        }
      ]
    }
  ]
};

// Utility functions for HP management
function healCharacter(character, healAmount) {
  if (!character) return false;

  const currentHp = character.currentHp;
  const maxHp = character.maxHp;

  // Calculate new HP, ensuring it doesn't exceed max
  const newHp = Math.min(currentHp + healAmount, maxHp);
  character.currentHp = newHp;

  // Return the actual amount healed
  return newHp - currentHp;
}

function damageCharacter(character, damageAmount) {
  if (!character) return false;

  const currentHp = character.currentHp;

  // Calculate new HP, ensuring it doesn't go below 0
  const newHp = Math.max(currentHp - damageAmount, 0);
  character.currentHp = newHp;

  // Return the actual damage dealt
  return currentHp - newHp;
}

function increaseMaxHp(character, bonusHp) {
  if (!character) return false;

  // Increase max HP
  character.maxHp = character.maxHp + bonusHp;

  // Also increase current HP by the same amount
  character.currentHp = character.currentHp + bonusHp;

  return true;
}

function getHpStatus(character) {
  if (!character) return { current: 0, max: 0, percentage: 0 };

  const current = character.currentHp;
  const max = character.maxHp;
  const percentage = Math.round((current / max) * 100);

  return { current, max, percentage };
}