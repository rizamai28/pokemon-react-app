import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=21";
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    const getPokemonApi = async () => {
      // すべてのポケモンデータを取得
      const pokemonAllData = await getAllPokemon(initialUrl);

      // 各ポケモンの詳細なデータを取得
      loadPokemon(pokemonAllData.results);

      setPrevUrl(pokemonAllData.previous);
      setNextUrl(pokemonAllData.next);
      setIsLoading(false);
    };
    getPokemonApi();
  }, []);

  const loadPokemon = async (results) => {
    const _pokemonDetailData = await Promise.all(
      results.map(async (pokemon) => await getPokemon(pokemon.url))
    );
    console.log(_pokemonDetailData);
    setPokemonData(_pokemonDetailData);
  };

  const handlePrevPage = async () => {
    if (!prevUrl) {
      return;
    }
    setIsLoading(true);

    const pokemonData = await getAllPokemon(prevUrl);
    await loadPokemon(pokemonData.results);
    setPrevUrl(pokemonData.previous);
    setNextUrl(pokemonData.next);

    setIsLoading(false);
  };

  const handleNextPage = async () => {
    if (!nextUrl) {
      return;
    }
    setIsLoading(true);

    const pokemonData = await getAllPokemon(nextUrl);
    await loadPokemon(pokemonData.results);
    setPrevUrl(pokemonData.previous);
    setNextUrl(pokemonData.next);

    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <h1>ロード中...</h1>
      ) : (
        <>
          <Navbar />
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
              return <Card pokemon={pokemon} key={pokemon.name} />;
            })}
          </div>
          <div className="btn">
            <button type="button" onClick={handlePrevPage}>
              前へ
            </button>
            <button type="button" onClick={handleNextPage}>
              次へ
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
