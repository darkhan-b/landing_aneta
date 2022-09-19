
import './App.css';
import './custom.css';
import {useContext} from 'react';
import {ThemeContext} from './theme'

function Mainpart() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className="mainpage" style = {{background: theme.backColor, color: theme.color}}>
    <main>
    <div className="wrapper1">

  <div className="textSh1">
  <h1>Decentralized, On Chain BTC</h1><p>A protocol to unlock the value of Bitcoin on Ergo and Cardano.</p>
  </div>
        <div className="section1">
      <div className="guides">
  <div className="guide1"><div  className="imgSave">
  <img src={require('./static/img/f1.png')} /> </div><p><h4>Wrap Bitcoin on Ergo and Cardano</h4></p><div className="text5">Guaranteed and verifiable through transparent and accessible smart contracts.</div>
  </div>
  <div className="guide1"><div  className="imgSave">
  <img src={require('./static/img/f2.png')} /></div><p><h3>Security and Privacy</h3></p><p /><div className="text6">Leverage built-in privacy and security tools of the most decentralized blockchains.</div>
  </div>
  <div className="guide1"> <div  className="imgSave">
  <img src={require('./static/img/f3.png')} /></div><p><h3>Research-driven</h3></p><p /><div className="text6">A meticulous approach, ensuring correctness with constant oversight and testing.</div>
  </div>
      </div>
        </div>

        <div class="block3"></div>
        <div className="textSh3"><h1>Our partners</h1><p>Learn more about our partners who are contributing to decentralized finance.</p></div>
     <div className="section1">
      <div className="guides">
  <div className="guide" ><a href="https://ergodex.io" class="active">
  <img src={theme.ergo} />
  </a>
  </div>
  <div className="guide" ><a href="https://kyberswap.com/#/about" class="active"><img src={theme.kyber} /></a></div>
  <div className="guide" ><a href="https://minswap.org/" class="active"> <img src={theme.minswap} /></a></div>

      </div>
        </div>

        <div className="block2">
        <div className="textSh1"><h1>Join Our Community</h1><p>Chat with our team and community members as anetaBTC brings DeFi to Ergo and Cardano.</p></div>
        <div className="section1">
         <div className="guides1">
        <div className="guide2" ><a href="https://twitter.com/anetaBTC" class="active"><center><img src={require('./static/img/twitter.svg').default} /></center></a>
        <p><h2>Twitter</h2></p>
        <p className="socials">Latest project status, partnerships, and notifications!</p>
        </div>
        <div className="guide2" ><a href="https://t.me/anetaBTC" class="active"><center><img src={require('./static/img/tel1.svg').default} /> </center></a>
        <p><h2>Telegram</h2></p>
      <p className="socials">  Engage with anetaBTC community and get more information about our protocol.</p>
        </div>
        <div className="guide2" ><a href="https://discord.com/invite/ScXG76dJXM" class="active"> <center><img src={require('./static/img/discord.svg').default} /></center> </a>
        <p><h2>Discord</h2></p>
        <p className="socials">Discuss features, get support or contact devs.</p></div>
        <div className="guide2" ><a href="https://medium.com/@anetaBTC" class="active"> <center><img src={require('./static/img/reddit.svg').default} style = {{filter: theme.imgconf1}} /> </center></a>
        <p><h2>Medium</h2></p>
        <p className="socials"> Read our Medium articles for in depth updates on our progress.</p></div>
         </div>
           </div>

         </div>

  </div>

    </main>
    </div>
  );
}

export default Mainpart;
