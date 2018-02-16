var btnSearch = $('#btnSearch'); // Boton de busqueda 
initJson();

function initJson() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function(response) {
      // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      data.results.forEach(poke => {
        let pokeUrl = poke.url; // url del objeto
        let lastSlash = poke.url.lastIndexOf('/', pokeUrl.length - 1); // 1° slash
        let penultimateSlash = poke.url.lastIndexOf('/', lastSlash - 1); // 2 slash
        let pokeId = pokeUrl.slice(penultimateSlash, lastSlash); // variable que toma el id entre los slashes de la url
        let container = $('<div class="card">').addClass('cardItem');

        let img = $('<img>').attr('src', `https://pokeapi.co/media/img/${pokeId}.png`); 
        let title = $('<h2>').text(poke.name);
        container.append(img, title);
        $('#pokemons').append(container);
      });
      console.log(data.results);
    });
};


// https://pokeapi.co/docsv2/ 