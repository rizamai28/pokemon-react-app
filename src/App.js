import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemonApi = async () => {
      // すべてのポケモンデータを取得
      const pokemonAllData = await getAllPokemon(initialUrl);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(pokemonAllData.results);

      setIsLoading(false);
    };
    getPokemonApi();
  }, []);

  const loadPokemon = async (results) => {
    const _pokemonDetailData = await Promise.all(
      results.map(async (pokemon) => await getPokemon(pokemon.url))
    );
    setPokemonData(_pokemonDetailData);
  };

  console.log(pokemonData);

  return (
    <div className="App">
      {isLoading ? (
        <h1>ロード中...</h1>
      ) : (
        <div className="pokemonCardContainer">
          {pokemonData.map((pokemon, i) => {
            return <Card pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
