import React from 'react';
import ReactDOM from 'react-dom/client';
import  { useEffect } from 'react';
import {createContext, useState} from 'react';
import background1 from "./anetaBackground.jpg";
import background2 from "./dark_back.png";
import footer1 from "./anetaBackground.jpg";
import footer2 from "./dark_back.png";

import ergodex1 from "./ergodex1.png";
import ergodex2 from "./ergodex2.png";

import kyber1 from "./kyberswap2.png";
import kyber2 from "./kyberswap3.png";

import minswap1 from "./minswap1.png";
import minswap2 from "./minswap2.png";

import sun from "./sun.png"
import moon from "./moon.png"

import logo1 from "./anetaLogo.png"
import logo2 from "./anetaLogoDark.png"

import logoSun from "./static/imgphoto/logoday.png"
import logoNight from "./static/imgphoto/logonight.png"

const themes = {
  dark: {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, 255)), url(${background1})` ,
    backgroundFooter: `url(${footer1})`,
    color: "black",
    backColor: "#ffffff",
    imgconf: 'invert(1)',
    imgconf1: 'invert(0)',
    links: "black",
    label: "#002030",
    ergo: `${ergodex1}`,
    kyber: `${kyber2}`,
    minswap: `${minswap1}`,
    sun: `${moon}`,
    logo: `${logo2}`,
    trans: '1s',
    logoFoot: `${logoSun}`,
  },
  light: {
    backgroundImage: `linear-gradient(to bottom, transparent, #18191a),url(${background2})`,
    backgroundFooter: `url(${footer2})`,
    color: "white",
    backColor: '#18191a',
    imgconf: 'invert(0)',
    imgconf1: 'invert(1)',
    links: "#c1cad0",
    label: "white",
    ergo: `${ergodex2}`,
    kyber: `${kyber1}`,
    minswap: `${minswap2}`,
    sun: `${sun}`,
    logo: `${logo1}`,
    trans: '1s',
    logoFoot: `${logoNight}`,
  },
}

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false)
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === "true"
    setIsDark(isDark);
  }, [])
  return (
    <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>{children}</ThemeContext.Provider>
  );
}


export default ThemeProvider
