// alert('Aún no es responsive. De momento sólo disponible versión Desktop.');

function mDown(obj) {
  obj.style.backgroundColor = "#015d52";
};

function mUp(obj) {
  obj.style.backgroundColor = "#f0f8ff";
};

const fetchPokemon = async () => {
  const pokeNameInput = document.getElementById('nmbre');
  let elNombre = pokeNameInput.value;
  elNombre = elNombre.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${elNombre}`;
  let data = await fetch(url).then((res) => {
    if (res.status != '200') {
      console.log(res);
      pokeImage('./recursos/pokeball-open.png')
    }
    else {
      return res.json();
    }
  });

  if (data) {
    console.log(data);

    let pokeImg = data.sprites.front_default;
    pokeImage(pokeImg);
    console.log(pokeImg);

    let pokeAbs = data.abilities;
    pokeAbility(pokeAbs); 
    console.log(pokeAbs);

    let pokemonType = data.types;
    typePoke(pokemonType);
    console.log(pokemonType);

    let pokemonStats = data.stats;
    statPoke(pokemonStats);
    console.log(pokemonStats);

    let pokNam = data.name;
    pokemonName(pokNam);
    console.log(pokNam);

    let pokeId = data.id;
    pokId(pokeId);
    console.log(pokeId);
  }
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById('pokeImg');
  pokePhoto.src = url;
};

const pokeAbility = (abilities) => {
  const pokeAbilities = document.getElementById('abilities');
  const abilitiesName = abilities.map((item) => item.ability.name);
  pokeAbilities.innerHTML = (abilitiesName);
};

const typePoke = (types) => {
  const pokeTypes = document.getElementById('typePokemon');
  const typesName = types.map((item) => item.type.name);
  pokeTypes.innerHTML = (typesName);
};

const statPoke = (stats) => {
  const pokeStats = document.getElementById('statistics');
  const statName = stats.map((item) => item.stat.name);
  const statNum = stats.map((item) => item.base_stat);
  pokeStats.innerHTML = (statName[0] + ': ' + statNum[0] + '<br/>' + statName[1] + ': ' + statNum[1] + '<br/>' + statName[2] + ': ' + statNum[2]) + '<br/>' + statName[3] + ': ' + statNum[3] + '<br/>' + statName[4] + ': ' + statNum[4] + '<br/>' + statName[5] + ': ' + statNum[5];
};

const pokemonName = (namPok) => {
  const pokeNom = document.getElementById('namPok');
  pokeNom.innerHTML = namPok;
};

const pokId = (numPok) => {
  const idPokemon = document.getElementById('numPok');
  idPokemon.innerHTML = numPok;
};