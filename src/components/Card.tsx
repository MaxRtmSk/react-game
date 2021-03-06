import React, { useEffect, useState } from 'react';

import {CardFront} from './CardFront';
import {CardShirt} from './CardShirt';

import shirt from '../img/shirt.png'
import shirtPixel from '../img/shirtPixel.png'

type TestCard = {
  img: string,
  idPokemon: number,
  id: number,
  canFlip: boolean,
  isFlipped: boolean,
  name: string,
  onClick: ((card:object) => {})
}

export const Card = ({img, isFlipped, name, id, onClick}:TestCard ) => {

  return (<div className="card-container">
    <div className={"card" + (isFlipped ? " flipped" : "")} onClick={onClick}>
      <CardFront className="side front" src={img} name={name}/>
      <CardShirt className="side back" src={shirtPixel} />
    </div>
  </div>)
}