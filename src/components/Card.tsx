import React, { useEffect, useState } from 'react';
import { CardImge } from './CardImge'

import shirt from '../img/shirt.png'

type TestCard = {
  img: string
}

export const Card = ({img}:TestCard) => {
  const [flip, setFlip] = useState(true)

  return (<div className="card-container">
    <div className={"card" + (flip ? " flipped" : "")} onClick={() => { setFlip(!flip) }}>
      <CardImge className="side front" src={img} />
      <CardImge className="side back" src={shirt} />
    </div>
  </div>);
}