import UI from './ui.js';

// Init UI
const ui = new UI();

class Pokemon {
  constructor() {}

  // Get Pokemon
  async getPokemon(pokemon) {
    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
      );
      const allPokemonResponse = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );

      const pokemonData = await pokemonResponse.json();
      const allPokemonData = await allPokemonResponse.json();

      return {
        pokemonData: pokemonData,
        allPokemonData: allPokemonData,
      };
    } catch {
      console.log('there was an error');
      // Show Alert
      ui.showAlert('Pokemon not found', 'alert alert-danger alert-box');
    }
  }
}

export default Pokemon;
