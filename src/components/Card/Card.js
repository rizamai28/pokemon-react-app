import React from "react";
import "./Card.css";
import { getPokemonNameJa } from "../../utils/pokemon";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="pokemon" />
      </div>
      <h3 className="cardName">{getPokemonNameJa(pokemon.name)}</h3>
      <div className="cardTypes">
        <p>タイプ</p>
        {pokemon.types.map((type) => (
          <div className="type" key={type.type.name}>
            <span>{type.type.name}</span>
          </div>
        ))}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">図鑑番号: {pokemon.id}</p>
        </div>
        <div className="cardData">
          <p className="title">重さ: {pokemon.weight} kg</p>
        </div>
        <div className="cardData">
          <p className="title">高さ: {pokemon.height} m</p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ: {pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
