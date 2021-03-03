import { useEffect, useState } from "react";
import { Card } from "./Card"

type BoardProps = {
  pokemons: Array<any>
}

export const Board = ({pokemons}:BoardProps) => {
  console.log(pokemons)
  return (<div className="board-container">
    {pokemons.map((pokemon: any) => {
        let pokemonId: number = pokemon.id
        console.log(pokemonId)
        return (<Card img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}/>)
      })}
    </div>);
}