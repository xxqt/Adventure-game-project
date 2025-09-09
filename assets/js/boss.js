const boss = {
  "name": "Necromancer",
  "animations": {
    "idle": "../assets/boss/boss_idle.gif",
    "attack": "../assets/boss/boss_attack.gif",
    "death": "../assets/boss/boss_death.gif",
    "buff": "../assets/boss/boss_buff.gif"
  },
  "hp": 600,
  "difficulty": 5,
  "flavor": "A dark wizard who wields destructive magic and empowers himself.",
  "abilities": [
    {
      "name": "Grand Fireball",
      "damage": 50,
      "heal": 0,
      "description": "Hurls a massive fireball that scorches the enemy."
    },
    {
      "name": "Dark Empowerment",
      "damage": 0,
      "heal": 30,
      "description": "Channels dark energy to strengthen himself, healing 30 HP."
    }
  ]
};
