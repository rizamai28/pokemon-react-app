import pokemonAllNameJson from "./pokemon.json";

export const getAllPokemon = async (url) => {
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async (url) => {
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonNameJa = (pokemonNameEn) => {
  const pokemonName = pokemonAllNameJson.find(
    (pokemonName) =>
      pokemonName.en.toLowerCase() === pokemonNameEn.toLowerCase()
  );

  if (pokemonName) {
    return pokemonName.ja;
  }
  return pokemonNameEn;
};
