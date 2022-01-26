class UI {
  constructor() {
    this.container = document.querySelector('.container');
  }

  // Show Pokemon
  showPokemon(pokemon) {
    console.log(pokemon);
    this.container.innerHTML = `
    <div>
        <span class="pokenumber">${pokemon.id}</span>
        <div class="underline"></div>
        <span class="poketype">${pokemon.types[0].type.name}
        </span>
        <div class="img-container">
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
        </div>
        <h3 class="section-title">${pokemon.name}</h3>
    </div>
    `;
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
            <div>
            <span class="pokenumber">${data.order}</span>
            <div class="underline"></div>
            <span class="poketype">${data.types[0].type.name}</span>
            <div class="img-container">
            <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
            </div>
            <h3 class="section-title">${data.name}</h3>
            </div>
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
