import React, { useEffect, useState } from 'react';


export const CardFront = ({ src, alt = "", style = {}, className = "", name , ...props }: any) => {
  return (
    <div>
      <p>{name}</p>
      <div className = "card-img-block">
      <img alt={alt} style={style} className={className} src={src} />
      </div>
    </div>
    )
}