import React, { useEffect, useState } from "react";
import s from "./Header.module.scss"
import logo from "../../img/logo.png";
import shirtPixel from "../img/shirtPixel.png";

const divStyle = {
    height: `74px`,
    width: `200px`,
    backgroundImage: 'url(' + logo + ')',
    backgroundSize: "cover",
    margin: "0 auto",
    marginTop: "10px",
  };

export const Header = () => {
  return <div className={s.logo}>
      <div style={divStyle}></div>
  </div>;
};
