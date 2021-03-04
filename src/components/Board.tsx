import { useEffect, useState } from "react";
import { Card } from "./Card"


type BoardProps = {
  pokemons: Array<any>
}

interface pokemonsPropsTypes {
  [key: number]: {
    idPokemon: number,
    id: number,
    canFlip: boolean,
    isFlipped: boolean,
    name: string,
  }
}

export const Board = ({ pokemons }: BoardProps) => {
  const [pokemonsProps, setPokemonsProps] = useState<Array<pokemonsPropsTypes>>(pokemons)
  const [canFlip, setCanFlip] = useState(false);


  function setCardIsFlipped(CardID: any, isFlipped: any) {
    setPokemonsProps(
      (prev: any): any => {
        return (prev.map((c: any): any => {
          if (c.id !== CardID) return c;
          return { ...c, isFlipped };
        })
        )
      })
  }

  useEffect((): void => {
    setTimeout(() => {
      let index = 0;
      
      pokemonsProps.forEach((pokemon:any) => {
        setTimeout(() => setCardIsFlipped(pokemon.id, true), index++ * 400);
    });
      setTimeout(() => setCanFlip(true), pokemonsProps.length * 100);
    }, 3000);
  }, [])

  return (<div className="board-container">
    {pokemonsProps.map((pokemon: any) => {
      return (<Card isFlipped={pokemon.isFlipped} key={pokemon.id} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.idPokemon}.png`} {...pokemon} />)
    })}
  </div>);
}