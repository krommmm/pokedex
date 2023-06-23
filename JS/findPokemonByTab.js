const findPokemonByTab = async (listPokemon) => {
	listPokemon.map((pokemon) => {
		console.log(pokemon[0].nom);
		console.log(pokemon[0].img);
		console.log(pokemon[0].numero);
		console.log(pokemon[0].types[0]);
		if (pokemon[0].types[1] !== undefined) {
			console.log(pokemon[0].types[1]);
		}

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

		let nameNode = document.createTextNode(`${pokemon[0].nom}`);
		img.setAttribute('src', `${pokemon[0].img}`);
		let numeroNode = document.createTextNode(`#${pokemon[0].numero}`);

		name.appendChild(nameNode);
		numero.appendChild(numeroNode);

		pokemonContainer.appendChild(pokemonDiv);
		pokemonDiv.appendChild(img);
		pokemonDiv.appendChild(textDiv);
		textDiv.appendChild(numero);
		textDiv.appendChild(name);
		textDiv.appendChild(typeContainer);

	

		for (let i = 0; i < pokemon[0].types.length; i++) {
			let type = document.createElement('p');
			type.className = `${pokemon[0].types[i]}`;
			let typeNode = document.createTextNode(`${pokemon[0].types[i]}`);
			type.appendChild(typeNode);
			typeContainer.appendChild(type);
		}
	});
};

// console.log(listPokemonInfo);
// 	console.log(listPokemonInfo[0][0].nom);
// 	console.log(listPokemonInfo[0][1].img);
// 	console.log(listPokemonInfo[0][2].numero);
// 	console.log(listPokemonInfo[0][3].type);
// 	console.log(listPokemonInfo[0][4].type);
