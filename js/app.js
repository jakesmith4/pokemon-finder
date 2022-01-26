import getElement from './getElement.js';
import Pokemon from './pokemon.js';
import UI from './ui.js';

// Search Input
const searchPokemon = getElement('#searchPokemon');
const btn = getElement('.btn');

// Init Pokemon
const pokemon = new Pokemon();
// Init UI
const ui = new UI();

// Search Input Event Listener
searchPokemon.addEventListener('keyup', (e) => {
  e.preventDefault();
  // Get Input Text
  const userText = e.target.value.toLowerCase();

  if (userText) {
    // Make HTTP Call
    pokemon.getPokemon(userText).then((data) => {
      // Show Alert
      ui.showAlert(
        `Pokemon found: ${data.pokemonData.name.toUpperCase()}`,
        'alert alert-success alert-box'
      );
      // Show Profile
      ui.showPokemon(data.pokemonData);
    });
  } else {
    // Clear Pokemon
    ui.clearPokemon();
  }
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  pokemon.getPokemon('pikachu').then((data) => {
    ui.showAlert('Showing: ALL POKEMON', 'alert alert-success alert-box');
    ui.showAllPokemon(data.allPokemonData.results);
  });
});
