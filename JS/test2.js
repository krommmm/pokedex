searchBar.addEventListener('input', function () {
	pokemonContainer.innerHTML = '';

	if (searchBar.value === '') {
		findPokemonByTab(listPokemonInfo);
	} else {
		var myTableau = [[{}]];
		let pokemonSearched = searchBar.value;

		listPokemonInfo.map((element) => {
			if (element[0].nom.includes(pokemonSearched)) {
				myTableau[0][0] = Object.assign(myTableau[0][0], {
					nom: `${element[0].nom}`,
				});
				myTableau[0][0] = Object.assign(myTableau[0][0], {
					img: `${element[0].img}`,
				});
				myTableau[0][0] = Object.assign(myTableau[0][0], {
					numero: `${element[0].numero}`,
				});

				// Vérifier si le Pokémon a deux types
				if (element[0].types.length === 2) {
					myTableau[0][0].types = [
						`${element[0].types[0]}`,
						`${element[0].types[1]}`,
					];
				} else {
					myTableau[0][0].types = [`${element[0].types[0]}`];
				}
			}
		});
		console.log(myTableau);

		findPokemonByTab(myTableau);
	}
});
