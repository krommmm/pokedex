// https://pokeapi.co/api/v2/pokemon/onix

// https://pokeapi.co/api/v2/pokemon/
const addresseAllPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const pokemonContainer = document.querySelector('.pokemon_container');
const searchBar = document.getElementById('search_Bar');
var listPokemon = [];
var info;
var listPokemonInfo = [];
var listSearched = [];

const getPokemon = async (url) => {
	const res = await fetch(url);
	const res2Json = await res.json();
	return res2Json;
};

const displayPokemon = async (url) => {
	var pokemon = await getPokemon(url);
	//console.log(pokemon.name);
	let pokemonDiv = document.createElement('div');
	let img = document.createElement('img');
	let textDiv = document.createElement('div');
	let name = document.createElement('h2');
	let numero = document.createElement('p');
	let typeContainer = document.createElement('div');

	pokemonDiv.className = 'pokemon';
	name.className = 'name';
	img.className = 'pokemon_img';
	textDiv.className = 'texte_container';
	numero.className = 'numero';
	typeContainer.className = 'type_container';

	let nameNode = document.createTextNode(`${pokemon.name}`);
	img.setAttribute(
		'src',
		`${pokemon.sprites.other['official-artwork'].front_default}`
	);
	let numeroNode = document.createTextNode(`#${pokemon.order}`);

	name.appendChild(nameNode);
	numero.appendChild(numeroNode);

	pokemonContainer.appendChild(pokemonDiv);
	pokemonDiv.appendChild(img);
	pokemonDiv.appendChild(textDiv);
	textDiv.appendChild(numero);
	textDiv.appendChild(name);
	textDiv.appendChild(typeContainer);
	let infoPokemon = [
		{
			nom: `${pokemon.name}`,
			img: `${pokemon.sprites.other['official-artwork'].front_default}`,
			numero: `${pokemon.order}`,
		},
	];

	let types = []; // Tableau pour stocker les types

	for (let i = 0; i < pokemon.types.length; i++) {
		let type = document.createElement('p');
		type.className = `${pokemon.types[i].type.name}`;
		let typeNode = document.createTextNode(`${pokemon.types[i].type.name}`);
		type.appendChild(typeNode);
		typeContainer.appendChild(type);

		types.push(`${pokemon.types[i].type.name}`); // Ajouter le type au tableau des types
	}

	// Fusionner les types avec l'objet infoPokemon
	infoPokemon[0] = Object.assign(infoPokemon[0], { types });

	return infoPokemon;
};

//fonction qui requete et get les noms des pokemons
const findPokemon = async (url) => {
	let res = await fetch(url);
	let res2Json = await res.json();
	for (let i = 0; i < 151; i++) {
		listPokemon.push(res2Json.results[i].name);
	}
	console.log(listPokemon);
	for (let pokemon of listPokemon) {
		//fonction qui requete 1 pokemon et push les infos dans un tableau
		info = await displayPokemon(
			`https://pokeapi.co/api/v2/pokemon/${pokemon}`
		);
		listPokemonInfo.push(info);
	}
};
findPokemon(addresseAllPokemon)
	.then(() => {
		//pokemonContainer.innerHTML = "";
		//findPokemonByTab(listPokemonInfo);
	})
	.catch((err) => console.log(err));

	searchBar.addEventListener('input', function () {
		pokemonContainer.innerHTML = '';
	  
		if (searchBar.value === '') {
		  findPokemonByTab(listPokemonInfo);
		} else {
		  var myTableau = []; // Utiliser un tableau vide pour stocker les Pokémon correspondants
		  let pokemonSearched = searchBar.value;
	  
		  listPokemonInfo.map((element) => {
			if (element[0].nom.includes(pokemonSearched) || element[0].numero.includes(pokemonSearched) || element[0].types[0].includes(pokemonSearched) || (element[0].types.length > 1 && element[0].types[1].includes(pokemonSearched))) {
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
	  
		  //console.log(myTableau);
		  findPokemonByTab(myTableau);
		}
	  });
	  
