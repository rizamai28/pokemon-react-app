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
