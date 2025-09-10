const enemies = {
  "enemies": [
    {
      "name": "Goblin",
      "animations": {
        "idle": "../assets/enemies/goblin/goblin_idle.gif",
        "attack": "../assets/enemies/goblin/goblin_attack.gif",
        "death": "../assets/enemies/goblin/goblin_death.gif"
      },
      "hp": 50,
      "difficulty": 1,
      "gold": 10,
      "flavor": "A mischievous creature that relies on quick strikes.",
      "abilities": [
        { "name": "Claw Swipe", "damage": 10, "heal": 0, "description": "A quick slash with sharp claws." },
        { "name": "Goblin Bite", "damage": 15, "heal": 0, "description": "Bites viciously at the enemy." }
      ]
    },
    {
      "name": "Flying Eye",
      "animations": {
        "idle": "../assets/enemies/flying_eye/flying_eye_idle.gif",
        "attack": "../assets/enemies/flying_eye/flying_eye_attack.gif",
        "death": "../assets/enemies/flying_eye/flying_eye_death.gif"
      },
      "hp": 40,
      "difficulty": 2,
      "gold": 15,
      "flavor": "A creepy flying eye that attacks from above.",
      "abilities": [
        { "name": "Eye Beam", "damage": 12, "heal": 0, "description": "Shoots a piercing beam from its eye." },
        { "name": "Swoop Attack", "damage": 8, "heal": 0, "description": "Dives quickly at the opponent to scratch them." }
      ]
    },
    {
      "name": "Skeleton",
      "animations": {
        "idle": "../assets/enemies/skeleton/skeleton_idle.gif",
        "attack": "../assets/enemies/skeleton/skeleton_attack.gif",
        "death": "../assets/enemies/skeleton/skeleton_death.gif"
      },
      "hp": 60,
      "difficulty": 3,
      "gold": 20,
      "flavor": "An animated skeleton wielding a rusty sword.",
      "abilities": [
        { "name": "Bone Slash", "damage": 15, "heal": 0, "description": "A swing of its sword made of bones." },
        { "name": "Rattle", "damage": 5, "heal": 0, "description": "Shakes bones to intimidate the enemy." }
      ]
    },
    {
      "name": "Necromancer",
      "animations": {
        "idle": "../assets/boss/boss_idle.gif",
        "attack": "../assets/boss/boss_attack.gif",
        "death": "../assets/boss/boss_death.gif",
        "buff": "../assets/boss/boss_buff.gif"
      },
      "hp": 600,
      "difficulty": 5,
      "gold": 100, // you can adjust reward
      "flavor": "A dark wizard who wields destructive magic and empowers himself.",
      "abilities": [
        { "name": "Grand Fireball", "damage": 50, "heal": 0, "description": "Hurls a massive fireball that scorches the enemy." },
        { "name": "Dark Empowerment", "damage": 0, "heal": 30, "description": "Channels dark energy to strengthen himself, healing 30 HP." }
      ]
    }
  ]
};
