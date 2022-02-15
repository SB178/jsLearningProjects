const baseUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const heading = document.createElement('h1');
heading.textContent= 'All Pokemons';
heading.style.fontFamily= 'Lemon Milk';
heading.style.textAlign= 'Center';
document.body.prepend(heading);
for(let i=1;i<=151;i++)
{
	let pokemonContainer = document.createElement('div');
	let pokemon = document.createElement('img');
	pokemon.src=`${baseUrl}${i}.png`;
	//pokemon.style.padding='0.125em';
	const container = document.getElementById('container');
	container.style.paddingLeft = '1%';
	pokemonContainer.style.display = 'inline-block';
	pokemonContainer.appendChild(pokemon);
	let pokemonCounter = document.createElement('p');
	pokemonCounter.textContent=i;
	pokemonCounter.style.textAlign = 'center';
	pokemonCounter.style.fontFamily = 'Lemon Milk Light';
	pokemonContainer.appendChild(pokemonCounter);
	container.appendChild(pokemonContainer);
}