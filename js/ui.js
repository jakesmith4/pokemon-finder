import { changeStatColors } from './changeStatColors.js';
import { checkType } from './checkType.js';

class UI {
  constructor() {
    this.container = document.querySelector('.container');
    this.container2 = document.querySelector('.container-2');
    this.form = document.querySelector('.form');
    this.navbar = document.querySelector('.navbar');
    this.navHeading = document.querySelector('.nav-heading');
    this.numberInput = document.querySelector('#number');
  }

  // Show Pokemon
  showPokemon(pokemon) {
    console.log(pokemon);
    this.container.innerHTML = `
    <article>
      <h4>${pokemon.name}</h4>
      <span class="poke-number">#00${pokemon.id}</span>
      <div class="span-control">
      <span class="poke-type">${pokemon.types[0].type.name}</span>
      <span class="poke-type-2">${
        pokemon.types[1] ? pokemon.types[1].type.name : ''
      }</span>
      </div>
      <div class="article-img-container">
        <img src="${
          pokemon.sprites.other['official-artwork'].front_default
        }" class="article-img" alt="${pokemon.name}">
        </div>
        <div class="pokemon-stats">
        <div class="tab-container">

        <span class="tab">About</span>
        <span class="tab">Stats</span>
        <span class="tab">Moves</span>
        </div>
        <div class="stats-container">

        <ul class="poke-list">
        <li>Weight:</li>
        <li><span class="stats">${Math.floor(
          pokemon.weight * 0.2248
        )} lbs</span></li>
          </ul>
          <ul class="poke-list">
          <li>Height:</li>
          <li><span class="stats">${pokemon.height}</span></li>
          </ul>
          <ul class="poke-list">
          <li>Abilites:</li>
          <li><span class="stats">${
            pokemon.abilities[0].ability.name
          },</span></li>
          <li><span class="stats">${
            pokemon.abilities[1] ? pokemon.abilities[1].ability.name : ''
          },</span></li>
          <li><span class="stats">${
            pokemon.abilities[2] ? pokemon.abilities[2].ability.name : ''
          }</span></li>
          </ul>
          <ul class="poke-list">
          <li>Base Experience:</li>
          <li><span class="stats">${pokemon.base_experience}</span></li>
          </ul>
          </div>
        </div>
      </article>
    `;
    this.changeAllBackgrounds(pokemon);
    // Select All Tabs
    const tabBtns = document.querySelectorAll('.tab');
    const type = pokemon.types[0].type.name;
    tabBtns.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        if (e.currentTarget.textContent === 'About') {
          tabBtns[0].style.borderColor = '#222';
          tabBtns[1].style.borderColor = 'transparent';
          tabBtns[2].style.borderColor = 'transparent';

          const statsContainer = document.querySelector('.stats-container');
          statsContainer.innerHTML = `
          <ul class="poke-list">
        <li>Weight:</li>
        <li><span class="stats">${Math.floor(
          pokemon.weight * 0.2248
        )} lbs</span></li>
          </ul>
          <ul class="poke-list">
          <li>Height:</li>
          <li><span class="stats">${pokemon.height}</span></li>
          </ul>
          <ul class="poke-list">
          <li>Abilites:</li>
          <li><span class="stats">${
            pokemon.abilities[0].ability.name
          },</span></li>
          <li><span class="stats">${
            pokemon.abilities[1] ? pokemon.abilities[1].ability.name : ''
          },</span></li>
          <li><span class="stats">${
            pokemon.abilities[2] ? pokemon.abilities[2].ability.name : ''
          }</span></li>
          </ul>
          <ul class="poke-list">
          <li>Base Experience:</li>
          <li><span class="stats">${pokemon.base_experience}</span></li>
          </ul>
          `;
          checkType(type);
        }

        if (e.currentTarget.textContent === 'Stats') {
          tabBtns[0].style.borderColor = 'transparent';
          tabBtns[1].style.borderColor = '#222';
          tabBtns[2].style.borderColor = 'transparent';
          const statsContainer = document.querySelector('.stats-container');
          statsContainer.innerHTML = `
          <ul class="poke-list">
        <li>${pokemon.stats[0].stat.name.toUpperCase()}</li>
        <li><span class="stats">${pokemon.stats[0].base_stat}</span></li>
        <li class="stat-bar"><span class="span-bar" style="width:${
          pokemon.stats[0].base_stat
        }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[1].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[1].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[1].base_stat
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[2].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[2].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[2].base_stat
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[3].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[3].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[3].base_stat
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[4].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[4].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[4].base_stat
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[5].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[5].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[5].base_stat
          }%"></span></li>
          </ul>
          `;
          checkType(type);
        }

        if (e.currentTarget.textContent === 'Moves') {
          tabBtns[0].style.borderColor = 'transparent';
          tabBtns[1].style.borderColor = 'transparent';
          tabBtns[2].style.borderColor = '#222';
          const statsContainer = document.querySelector('.stats-container');
          statsContainer.innerHTML = `
          <ul class="poke-list">
        <li>Move 1:</li>
        <li><span class="stats">${
          pokemon.moves[0] ? pokemon.moves[0].move.name : ''
        }</span></li>
          </ul>
          <ul class="poke-list">
          <li>Move 2:</li>
          <li><span class="stats">${
            pokemon.moves[1] ? pokemon.moves[1].move.name : ''
          }</span></li>
          </ul>
          <ul class="poke-list">
          <li>Move 3:</li>
          <li><span class="stats">${
            pokemon.moves[2] ? pokemon.moves[2].move.name : ''
          }</span></li>
          </ul>
          <ul class="poke-list">
          <li>Move 4:</li>
          <li><span class="stats">${
            pokemon.moves[3] ? pokemon.moves[3].move.name : ''
          }</span></li>
          </ul>
          <ul class="poke-list">
          <li>Move 5:</li>
          <li><span class="stats">${
            pokemon.moves[4] ? pokemon.moves[4].move.name : ''
          }</span></li>
          </ul>
          <ul class="poke-list">
          <li>Move 6:</li>
          <li><span class="stats">${
            pokemon.moves[5] ? pokemon.moves[5].move.name : ''
          }</span></li>
          </ul>
          `;
          checkType(type);
        }
      });
    });
  }

  // Change Article Background
  changeBackground(pokemonType, color, poke, color2) {
    const pokemonInput = document.querySelector('#searchPokemon:focus');
    const article = document.querySelector('article');
    const stats = document.querySelectorAll('.stats');
    const pokeType = document.querySelectorAll('.poke-type');
    const pokeType2 = document.querySelectorAll('.poke-type-2');
    const type = poke.types[0].type.name;
    if (type === pokemonType) {
      pokemonInput.style.outlineColor = color;
      this.form.style.borderColor = color;
      this.navbar.style.borderColor = color;
      this.navHeading.style.background = color;
      this.navHeading.style.borderColor = color2;
      this.navHeading.style.color = '#fff';
      this.navHeading.textContent = poke.name;
      article.style.background = color;
      article.style.borderColor = color;
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
    this.clearContainer(this.numberInput);

    const input = document.querySelector('#searchPokemon');
    input.value = '';
    allPokemon.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          this.container.innerHTML += `
      <article class="poke-background ${data.types[0].type.name}">
      <h4>${pokemon.name}</h4>
      <span class="poke-number">#00${data.order}</span>
      <div class="span-control">
      <span class="poke-type">${data.types[0].type.name}</span>
      <span class="poke-type-2">${
        data.types[1] ? data.types[1].type.name : ''
      }</span>
      </div>
      <div class="article-img-container">
        <img src="${
          data.sprites.other['official-artwork'].front_default
        }" class="article-img" loading="lazy" alt="${data.name}">
        </div>
        <div class="pokemon-stats">
        <ul class="poke-list">
        <li>Weight:</li>
        <li class="stat"><span>${Math.floor(
          data.weight * 0.2248
        )} lbs</span></li>
        </ul>
        <ul class="poke-list">
        <li>Height:</li>
        <li class="stat"><span>${data.height}</span></li>
        </ul>
        <ul class="poke-list">
        <li>Abilites:</li>
        <li class="stat"><span>${data.abilities[0].ability.name}</span></li>
        </ul>
        <ul class="poke-list">
        <li>Base Experience:</li>
        <li class="stat"><span>${data.base_experience}</span></li>
        </ul>
        </div>
      </article>
            `;

          // Select All Articles
          const article = document.querySelectorAll('article');

          // Set All Pokemon Colors
          this.setAllPokemonColors(article);
        });
    });
  }

  // Change Pokemon Colors
  changePokemonColors(article, pokemonType, color, color2) {
    article.forEach((item) => {
      if (item.classList.contains(pokemonType)) {
        item.style.background = color;
        item.style.borderColor = color;
        item.children[2].children[0].style.background = color2;
        item.children[2].children[1].style.background = color2;
        const list = [...item.children[4].children];
        list.forEach((element) => {
          element.children[1].style.color = color;
        });
      }
    });
  }

  // Set All Pokemon Colors
  setAllPokemonColors(article) {
    this.changePokemonColors(article, 'grass', '#7AC74C', '#95d270');
    this.changePokemonColors(article, 'ice', '#96D9D6', '#abe1de');
    this.changePokemonColors(article, 'water', '#61e0c9', '#81e6d4');
    this.changePokemonColors(article, 'bug', '#79ff6f', '#94ff8c');
    this.changePokemonColors(article, 'electric', '#ffd86f', '#ffe08c');
    this.changePokemonColors(article, 'fire', '#fb6c6c', '#f88c8c');
    this.changePokemonColors(article, 'normal', '#A8A77A', '#b9b995');
    this.changePokemonColors(article, 'ground', '#E2BF65', '#e8cc84');
    this.changePokemonColors(article, 'fighting', '#C22E28', '#ce5853');
    this.changePokemonColors(article, 'poison', '#A33EA1', '#b565b4');
    this.changePokemonColors(article, 'flying', '#A98FF3', '#baa5f5');
    this.changePokemonColors(article, 'psychic', '#F95587', '#fa779f');
    this.changePokemonColors(article, 'rock', '#B6A136', '#c5b45e');
    this.changePokemonColors(article, 'ghost', '#735797', '#8f79ac');
    this.changePokemonColors(article, 'dragon', '#6F35FC', '#8c5dfd');
    this.changePokemonColors(article, 'dark', '#705746', '#8d796b');
    this.changePokemonColors(article, 'steel', '#B7B7CE', '#c5c5d8');
    this.changePokemonColors(article, 'fairy', '#D685AD', '#de9dbd');
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
    // Select Alert Container
    const alertContainer = document.querySelector('.alert-container');
    // Append New Element To Alert Container
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

  // Clear Container
  clearContainer(number) {
    this.container.innerHTML = '';
    this.form.style.borderColor = '#222';

    this.navbar.style.borderColor = '#222';
    this.navHeading.style.background = '#3b4cca';
    this.navHeading.style.borderColor = '#6270d5';
    this.navHeading.style.color = '#fff';
    this.navHeading.textContent = `${number.value} Pokemon`;
  }

  // Clear Pokemon
  clearPokemon() {
    this.container.innerHTML = '';
    const form = document.querySelector('.form');
    const pokemonInput = document.querySelector('#searchPokemon:focus');

    form.style.borderColor = '#222';
    pokemonInput.style.outlineColor = '#222';
    this.navbar.style.borderColor = '#222';
    this.navHeading.style.background = '#ffde00';
    this.navHeading.style.borderColor = '#ffe533';
    this.navHeading.style.color = '#fff';
    this.navHeading.textContent = 'Finder';
  }
}

export default UI;
