export const getAllPokemon = async (url) => {
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    alert("ポケモンデータの取得に失敗しました");
    console.log(error);
  }
};
