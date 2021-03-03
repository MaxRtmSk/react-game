import React, { useEffect, useState } from 'react';


export const CardImge = ({ src, alt = "", style = {}, className = "", ...props }: any) => {
  return (
    <img alt={alt} style={style} className={className} src={src} />);
}