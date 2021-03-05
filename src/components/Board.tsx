import { error } from "console";
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

interface firstCard {
  idPokemon: number | null,
  id: number | null,
}

export const Board = ({ pokemons }: BoardProps) => {
  const [pokemonsProps, setPokemonsProps] = useState<Array<pokemonsPropsTypes>>(pokemons)
  const [canFlipBoard, setCanFlipBoard] = useState<boolean | null>(false);

  const [firstCard, setFirstCard] = useState<firstCard>({
    idPokemon: null,
    id: null,
  });
  const [secondCard, setSecondCard] = useState<firstCard>({
    idPokemon: null,
    id: null,
  });

  const [twoCard, setTwocard] = useState(false)

  function setCardIsFlipped(CardID: any, isFlipped: any) {
    setPokemonsProps(
      (prev: any): any => {
        return (prev.map((c: any): any => {
          if (c.id !== CardID) {
            return c
          };
          return { ...c, isFlipped };
        })
        )
      })
  }

  useEffect((): void => {
    setTimeout(() => {
      let index = 0;

      pokemonsProps.forEach((pokemon: any) => {
        setTimeout(() => setCardIsFlipped(pokemon.id, true), index++ * 100);
      });
      setTimeout(() => setCanFlipBoard(true), pokemonsProps.length * 100);
    }, 3000);
  }, [])


  useEffect(()=>{
    setTimeout(() => {
      if (firstCard.idPokemon !== secondCard.idPokemon) {
        Lose()
        return
      }
      if (firstCard.idPokemon == secondCard.idPokemon) {
        ResetCard()
      }
    }, 1000);
  },[twoCard])

  function Lose() {
    setCardIsFlipped(firstCard.id, true)
    setCardIsFlipped(secondCard.id, true)
    ResetCard()
  }

  function ResetCard(){
    setFirstCard({
      idPokemon: null,
      id: null,
    })
    setSecondCard({
      idPokemon: null,
      id: null,
    })
  }

  function onCardClick({ idPokemon, id, canFlip, isFlipped }: any) {
    if (!canFlipBoard)
      return;
    if (!canFlip)
      return;

    if (isFlipped == true) {
      setCardIsFlipped(id, false)
    }

    if (firstCard.id == null) {
      setFirstCard({
        id: id,
        idPokemon: idPokemon
      })
      return
    } else {
      setSecondCard({
        id: id,
        idPokemon: idPokemon
      })
      setTwocard(!twoCard)
    }

    
  }

  return (<div className={"board-container" + (canFlipBoard ? "" : " blockBoard")}>
    {pokemonsProps.map((pokemon: any) => {
      return (<Card
        onClick={() => onCardClick(pokemon)}
        isFlipped={pokemon.isFlipped}
        key={pokemon.id}
        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.idPokemon}.png`}
        {...pokemon}
      />)
    })}
  </div>);
}