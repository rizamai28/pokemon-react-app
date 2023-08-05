import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const getPokemonApi = async () => {
      // すべてのポケモンデータを取得
      const res = await getAllPokemon(initialUrl);
      console.log(res);
    };
    getPokemonApi();
  }, []);

  return <div className="App"></div>;
}

export default App;
