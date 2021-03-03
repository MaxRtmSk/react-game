import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import deepcopy from "deepcopy";
import { Board } from './Board';
import { resolve } from 'dns';

function shuffleArray(array: Array<object | string>) {
  return array.sort(() => .5 - Math.random());
}



async function fetchPokemonData(url: string) {
  const pokemon = await fetch(url);
  const pokemonJson = await pokemon.json();
  return pokemonJson;
}

async function LoadPokemon() {
  if (fetch) {
    const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon-form?offset=20&limit=12");
    const pokemon = await pokemonData.json();
    const pokemonPage = pokemon.next;
    const arrPokemon = await Promise.all(
      pokemon.results.map(
        async (onePokemon: any) => await fetchPokemonData(onePokemon.url)
      )
    );
    return arrPokemon;
  }
}

type GameProps = {
  string: string
}

export const Game = ({ string }: GameProps) => {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function noNameFun(): Promise<any> {

      const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon-form?offset=20&limit=12")
      const pokemon = await pokemonData.json();
      const arrPokemon = await Promise.all(
        pokemon.results.map(
          async (onePokemon: any) => await fetchPokemonData(onePokemon.url)
        )
      );

      return arrPokemon;
    }

    noNameFun().then((arrPokemon) => {
      setPokemons(arrPokemon)
      setLoading(!loading)
    })


  }, [])


  function onCardClick(card: Object) {
    console.log('onCardClickFun')
  }


  if (loading == false) {
    return <p>...Loading...</p>
  }

  return (
    <div>
      <Board pokemons={pokemons} />
    </div>
  )
}