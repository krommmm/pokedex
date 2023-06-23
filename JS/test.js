searchBar.addEventListener('input', function () {
    pokemonContainer.innerHTML = '';
  
    if (searchBar.value === '') {
      findPokemonByTab(listPokemonInfo);
    } else {
      var myTableau = []; // Utiliser un tableau vide pour stocker les Pokémon correspondants
      let pokemonSearched = searchBar.value;
  
      listPokemonInfo.map((element) => {
        if (element[0].nom.includes(pokemonSearched)) {
          let pokemon = {
            nom: `${element[0].nom}`,
            img: `${element[0].img}`,
            numero: `${element[0].numero}`,
            types: [], // Utiliser un tableau vide pour stocker les types du Pokémon
          };
  
          // Ajouter les types au tableau du Pokémon
          for (let type of element[0].types) {
            pokemon.types.push(type);
          }
  
          myTableau.push([pokemon]); // Ajouter le Pokémon à myTableau
        }
      });
  
      console.log(myTableau);
      findPokemonByTab(myTableau);
    }
  });