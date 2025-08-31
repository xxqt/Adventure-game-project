<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Character Selector</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>Character Selector</h1>

  <div class="Container">
    <div class="card-wrapper">
      <ul class="card-list" id="card-list">
        <!-- Cards will be generated here -->
      </ul>
    </div>
  </div>

  <!-- Load characters.js as a module -->
  <script type="module">
    import { characters } from './characters.js';

    const cardList = document.getElementById('card-list');

    characters.forEach(character => {
      const li = document.createElement('li');
      li.className = 'card-item';

      li.innerHTML = `
        <a href="#" class="card-link">
          <img src="${character.image}" alt="${character.name}" class="card-image">
          <h2>${character.name}</h2>
          <p>${character.flavor}</p>
        </a>
      `;

      cardList.appendChild(li);
    });
  </script>

</body>
</html>
