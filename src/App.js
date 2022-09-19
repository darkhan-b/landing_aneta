import { useEffect } from 'react'
import './App.css';
import './custom.css';
import {useContext} from 'react';
import react, {useState} from "react";

import {ThemeContext} from './theme'



const App = () => {

  useEffect(() => {
    document.title = "Home | anetaBTC"
  }, [])
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  const[selected, setSelected] = useState()
  console.log("theme", theme);
  return (



      <header className="App-header" style = {{backgroundImage: theme.backgroundImage, color: theme.color, transition: theme.trans}}>
      <div className="nav1">
    <div className="leftside">  <a href="/"><img className="logonav" src={theme.logo} /></a></div>
    <div className="rightside">
    <DropDown selected={selected} setSelected={setSelected}/>
<img className="icontheme" onClick={toggleTheme} src={theme.sun} />
</div>
</div>
      <div className="grid_label">
    <div className="box1"><h1> Decentralized,<br /> On-Chain Wrapped Bitcoin.</h1>
    <p style = {{color: theme.label}}>Fully On-chain Bitcoin on Ergo and Cardano.</p>
    <div className="imgSet">
    <a href="https://discord.com/invite/ScXG76dJXM" class="active" style = {{filter: theme.imgconf1}}><img src={require("./static/imgphoto/discord.png")} /></a>
    <a href="https://twitter.com/anetaBTC" class="active" style = {{filter: theme.imgconf1}}><img src={require('./static/imgphoto/twitter.png')} /></a>
    <a href="https://medium.com/@anetaBTC" class="active" style = {{filter: theme.imgconf1}}><img src={require('./static/imgphoto/medium.png')} /></a>
    <a href="https://t.me/anetaBTC" class="active" style = {{filter: theme.imgconf1}}><img src={require('./static/imgphoto/telegram.png')} /></a>
    </div>

    </div>
    <div className="box2"><img src={require("./static/img/angel3.svg").default} /></div>
      </div>

      </header>


  );
}


function DropDown({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false)

  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    const options = [
        {name: "LISO", link:"https://medium.com/@anetaBTC/liso-part-iii-stability-1bf017c6e816"},
        {name: "Neta Liquidity Fund", link:"https://datastudio.google.com/u/0/reporting/4cb333f9-39bf-448b-8d2d-f7ac3f44ad5d/page/p_0h6vsjfnsc"},
        {name: "Updates", link:"https://medium.com/@anetaBTC"},

        {name: "Mining", link:"./mining.pptx"},

        {name: "Litepaper", link:"https://medium.com/@anetaBTC/anetabtc-litepaper-v1-0-171f29b3276a"},

        {name: "Tokenomics", link:"https://medium.com/@anetaBTC/neta-tokenomics-55629989de2b"},


    ];
    return (
<div className="dropdown"  >


            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
<img src={require('./static/dropdown.png')} className="icon_drop" style = {{filter: theme.imgconf}} />



            </div>



            {isActive && (
                <div className="dropdown-content" style ={{background: theme.backgroundImage}}>
                <div>

                    {options.map((option) => (
                       <a href={option.link} style = {{color: theme.links}}>
                        <div onClick={(e) => {
                            setSelected(option)
                            setIsActive(false)  }}
                             className="dropdown-item" >


                          <b> {option.name}</b>


                        </div>
  </a>

                        ))}

                        </div>
                </div>
            )}
        </div>
    )
}

export default App;
