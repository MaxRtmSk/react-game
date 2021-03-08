import { useEffect, useState } from "react";
import { Card } from "./Card"
import s from './Board.module.scss'

type BoardProps = {
  pokemons: Array<any>,
  loading: boolean
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

export const Board = ({ pokemons, loading}: BoardProps) => {
  const [pokemonsProps, setPokemonsProps] = useState<Array<pokemonsPropsTypes>>(pokemons)
  const [canClickBoard, setCanClickBoard] = useState<boolean | null>(false);
  const [colorBoard, setColorBoard] = useState(s.grey)

  const [firstCard, setFirstCard] = useState<firstCard>({
    idPokemon: null,
    id: null,
  });
  const [secondCard, setSecondCard] = useState<firstCard>({
    idPokemon: null,
    id: null,
  });

  const [twoCard, setTwocard] = useState<boolean>(()=>false)

  function setCardIsFlipped(CardID: any, isFlipped: any, canFlip:boolean) {
    setPokemonsProps(
      (prev: any): any => {
        return (prev.map((c: any): any => {
          if (c.id !== CardID) {
            return c
          };
          return { ...c, isFlipped, canFlip};
        })
        )
      })
  }

  useEffect((): void => {
    setTimeout(() => {
      let index = 0;

      pokemonsProps.forEach((pokemon: any) => {
        setTimeout(() => setCardIsFlipped(pokemon.id, true, true), index++ * 100);
      });
      setTimeout(() => setCanClickBoard(true), pokemonsProps.length * 100);
    }, 3000);
  }, [])


  useEffect(()=>{
    {firstCard.idPokemon !== secondCard.idPokemon ? setColorBoard(s.red):setColorBoard(s.green)}
    setCanClickBoard(false)
    setTimeout(() => {  
      if (firstCard.idPokemon !== secondCard.idPokemon) {
        Lose()
        ResetCard()
        return
      }
      if (firstCard.idPokemon == secondCard.idPokemon) {
        ResetCard()
      }
    }, 1000);
  },[twoCard])

  function Lose() {
    setCardIsFlipped(firstCard.id, true, true)
    setCardIsFlipped(secondCard.id, true, true)
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
    setCanClickBoard(true)
  }


  function onCardClick({ idPokemon, id, canFlip, isFlipped }: any) {
    if (!canClickBoard)
      return;
    if (!canFlip){
      alert('you chose this card')
      return;
    }
      
    if (isFlipped == true) {
      setCardIsFlipped(id, false, false)
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


  return (<div className={s.boardContainer + (canClickBoard ? "" : ` ${s.blockBoard} ${colorBoard}`)}>
    {pokemonsProps.map((pokemon: any) => {
      return (<Card
        onClick={() => onCardClick(pokemon)}
        isFlipped={pokemon.isFlipped}
        key={pokemon.id}
        // img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.idPokemon}.png`}
        img={`https://www.serebii.net/pokemongo/pokemon/${pokemon.idPokemon}.png`}
        {...pokemon}
      />)
    })}
  </div>);
}