class UI {
  constructor() {
    this.container = document.querySelector('.container');
    this.container2 = document.querySelector('.container-2');
  }

  // Show Pokemon
  showPokemon(pokemon) {
    console.log(pokemon);
    this.container.innerHTML = `
    <article>
      <h4>${pokemon.name}</h4>
      <span class="poke-number">#00${pokemon.id}</span>
      <span class="poke-type">${pokemon.types[0].type.name}</span>
      <span class="poke-type-2">${
        pokemon.types[1] ? pokemon.types[1].type.name : ''
      }</span>
      <div class="article-img-container">
        <img src="${
          pokemon.sprites.other['official-artwork'].front_default
        }" class="article-img" alt="${pokemon.name}">
        </div>
        <div class="pokemon-stats">
        <ul class="poke-list">
        <li>Weight:</li>
        <li><span class="stats">${pokemon.weight} lbs</span></li>
        </ul>
        <ul class="poke-list">
        <li>Height:</li>
        <li><span class="stats">${pokemon.height}</span></li>
        </ul>
        <ul class="poke-list">
        <li>Abilites:</li>
        <li><span class="stats">${pokemon.abilities[0].ability.name}</span></li>
        <li><span class="stats">${
          pokemon.abilities[1] ? pokemon.abilities[1].ability.name : ''
        }</span></li>
        </ul>
        <ul class="poke-list">
        <li>Base Experience:</li>
        <li><span class="stats">${pokemon.base_experience}</span></li>
        </ul>
        </div>
      </article>
    `;

    this.changeAllBackgrounds(pokemon);
  }
  // Change Article Background
  changeBackground(pokemonType, color, poke, color2) {
    const article = document.querySelector('article');
    const stats = document.querySelectorAll('.stats');
    const pokeType = document.querySelectorAll('.poke-type');
    const pokeType2 = document.querySelectorAll('.poke-type-2');
    const type = poke.types[0].type.name;
    if (type === pokemonType) {
      article.style.background = color;
      stats.forEach((stat) => {
        stat.style.color = color;
      });
      pokeType.forEach((type) => {
        type.style.background = color2;
      });
      pokeType2.forEach((type) => {
        type.style.background = color2;
      });
    }
  }

  // Change Background For All Pokemon
  changeAllBackgrounds(poke) {
    this.changeBackground('fire', '#fb6c6c', poke, '#f88c8c');
    this.changeBackground('electric', '#ffd86f', poke, '#ffe08c');
    this.changeBackground('bug', '#79ff6f', poke, '#94ff8c');
    this.changeBackground('water', '#61e0c9', poke, '#81e6d4');
    this.changeBackground('ice', '#96D9D6', poke, '#abe1de');
    this.changeBackground('grass', '#7AC74C', poke, '#95d270');
    this.changeBackground('normal', '#A8A77A', poke, '#b9b995');
    this.changeBackground('ground', '#E2BF65', poke, '#e8cc84');
    this.changeBackground('fighting', '#C22E28', poke, '#ce5853');
    this.changeBackground('poison', '#A33EA1', poke, '#b565b4');
    this.changeBackground('flying', '#A98FF3', poke, '#baa5f5');
    this.changeBackground('psychic', '#F95587', poke, '#fa779f');
    this.changeBackground('rock', '#B6A136', poke, '#c5b45e');
    this.changeBackground('ghost', '#735797', poke, '#8f79ac');
    this.changeBackground('dragon', '#6F35FC', poke, '#8c5dfd');
    this.changeBackground('dark', '#705746', poke, '#8d796b');
    this.changeBackground('steel', '#B7B7CE', poke, '#c5c5d8');
    this.changeBackground('fairy', '#D685AD', poke, '#de9dbd');
  }

  // Show All Pokemon
  showAllPokemon(allPokemon) {
    this.clearPokemon();
    console.log(allPokemon);
    const input = document.querySelector('#searchPokemon');
    input.value = '';
    allPokemon.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          this.container.innerHTML += `
      <article class="poke-background">
      <h4>${pokemon.name}</h4>
      <span class="poke-number">#00${data.order}</span>
      <span class="poke-type">${data.types[0].type.name}</span>
      <div class="article-img-container">
        <img src="${data.sprites.other['official-artwork'].front_default}" class="article-img" alt="${data.name}">
        </div>
        <div class="pokemon-stats">
        <ul class="poke-list">
        <li>Weight:</li>
        <li><span>${data.weight} lbs</span></li>
        </ul>
        <ul class="poke-list">
        <li>Height:</li>
        <li><span>${data.height}</span></li>
        </ul>
        <ul class="poke-list">
        <li>Abilites:</li>
        <li><span>${data.abilities[0].ability.name}</span></li>
        </ul>
        <ul class="poke-list">
        <li>Base Experience:</li>
        <li><span>${data.base_experience}</span></li>
        </ul>
        </div>
      </article>
            `;
        });
    });
    // console.log(output);
  }

  // Show Alert Message
  showAlert(message, className) {
    // Clear Any Remaining Alerts
    this.clearAlert();
    // Create Div
    const div = document.createElement('div');
    // Add Classes
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Form Element
    const form = document.querySelector('.form');
    // Insert Alert Before Form
    // document.body.insertBefore(div, form);
    // Select Alert Container
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.appendChild(div);

    // Timeout After 3 Secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert Message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear Pokemon
  clearPokemon() {
    this.container.innerHTML = '';
  }
}

export default UI;
