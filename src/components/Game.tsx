import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import deepcopy from "deepcopy";
import { Board } from './Board';
import { resolve } from 'dns';
import PokemonSpiner from './PokemonSpinner';

//Sort Random Func
function shuffleArray(array: Array<object | string>) {
  return array.sort(() => .5 - Math.random());
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
  string: string
}

export const Game = ({ string }: GameProps) => {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    async function loadPokemon(): Promise<any> {
      //9
      const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon-form?offset=${randomInteger(50, 867)}&limit=6`)
      const pokemon = await pokemonData.json();
      const arrPokemons = await Promise.all(
        pokemon.results.map(
          async (onePokemon: any) => await fetchPokemonData(onePokemon.url)
        )
      );
      let CopyArrPokemons = arrPokemons.slice()
      let DoubleArrPokemon = arrPokemons.concat(CopyArrPokemons)
      let NewPokemonArr: any = []
      let varieble: any
      for (varieble of DoubleArrPokemon) {
        let obj = {
          idPokemon: varieble.id,
          name: varieble.name,
          isFlipped: false,
          canFlip: true,
          id: uuid()
        }
        NewPokemonArr.push(obj)
      }

      return shuffleArray(NewPokemonArr)
    }

    loadPokemon().then((arrPokemon) => {
      setPokemons(arrPokemon)
      setLoading(!loading)
    })


  }, [])







  if (loading == false) {
    return <PokemonSpiner/>
  }

  return (
    <div>
      <Board pokemons={pokemons} />
    </div>
  )
}