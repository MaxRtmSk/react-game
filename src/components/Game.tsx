import React, { useEffect, useState } from "react";
import PokemonSpiner from "./PokemonSpinner"
import { v4 as uuid } from "uuid";
import deepcopy from "deepcopy";
import { Board } from "./Board";
import { Menu } from "./Menu";
import { resolve } from "dns";;



//Sort Random Func
function shuffleArray(array: Array<object | string>) {
  return array.sort(() => 0.5 - Math.random());
}

//Random Number from Min to Max
function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

async function fetchPokemonData(url: string) {
  const pokemon = await fetch(url);
  const pokemonJson = await pokemon.json();
  return pokemonJson;
}

type GameProps = {
  string: string;
};

export const Game = ({ string }: GameProps) => {
  const [pokemons, setPokemons] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [loading, setLoading] = useState(false);


  function start(){
    async function loadPokemon(): Promise<any> {
      const pokemonData = await fetch(
        `https://pokeapi.co/api/v2/pokemon-form?offset=${randomInteger(
          50,
          867
        )}&limit=6`
      );
      const pokemon = await pokemonData.json();
      const arrPokemons = await Promise.all(
        pokemon.results.map(
          async (onePokemon: any) => await fetchPokemonData(onePokemon.url)
        )
      );
      let CopyArrPokemons = arrPokemons.slice();
      let DoubleArrPokemon = arrPokemons.concat(CopyArrPokemons);
      let NewPokemonArr: any = [];
      let varieble: any;
      for (varieble of DoubleArrPokemon) {
        let obj = {
          idPokemon: varieble.id,
          name: varieble.name,
          isFlipped: false,
          canFlip: true,
          id: uuid(),
        };
        NewPokemonArr.push(obj);
      }

      return shuffleArray(NewPokemonArr);
    }

    loadPokemon().then((arrPokemon) => {
      setPokemons(arrPokemon);
      setGameStart(true)
      setLoading(!loading);
    });
  }


  return (
    <div>
      <Menu onClick={start}/>
      {loading ? <Board pokemons={pokemons} loading={loading}/> : <PokemonSpiner />}
    </div>
  );
};
