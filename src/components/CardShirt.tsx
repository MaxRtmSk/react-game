import React, { useEffect, useState } from 'react';


export const CardShirt = ({ src, alt = "", style = {}, className = "", ...props }: any) => {
  return (
    <img alt={alt} style={style} className={className} src={src} />);
}