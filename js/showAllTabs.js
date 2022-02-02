import { checkType } from './checkType.js';

function showAllTabs(pokemon) {
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
        // statsContainer.innerHTML = aboutTemplate(pokemon);
        statsContainer.innerHTML = `
  <ul class="poke-list">
  <li>Weight:</li>
  <li><span class="stats">${Math.floor(pokemon.weight * 0.2248)} lbs</span></li>
    </ul>
    <ul class="poke-list">
    <li>Height:</li>
    <li><span class="stats">${pokemon.height}</span></li>
    </ul>
    <ul class="poke-list">
    <li>Abilites:</li>
    <li><span class="stats">${pokemon.abilities[0].ability.name},</span></li>
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
        <li class="stat-bar">
        <span class="span-bar" style="width:${
          pokemon.stats[0].base_stat / 2.55
        }%">
        </span>
        </li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[1].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[1].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[1].base_stat / 1.81
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[2].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[2].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[2].base_stat / 2.3
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[3].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[3].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[3].base_stat / 1.73
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[4].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[4].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[4].base_stat / 2.3
          }%"></span></li>
          </ul>
          <ul class="poke-list">
          <li>${pokemon.stats[5].stat.name.toUpperCase()}</li>
          <li><span class="stats">${pokemon.stats[5].base_stat}</span></li>
          <li class="stat-bar"><span class="span-bar" style="width:${
            pokemon.stats[5].base_stat / 1.6
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

export default showAllTabs;
