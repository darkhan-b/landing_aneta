
import './App.css';
import './custom.css';
import {useContext} from 'react';
import {ThemeContext} from './theme'
import Thumb from './mining.pptx';

function Landing() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className="footer_bat" style = {{backgroundImage: theme.backgroundFooter , color: theme.color}}>

<footer className="foot1" >

<div className="grid_footer">

<div className="foot1"><img src={theme.logoFoot} /><br />anetaBTC is a decentralized, secure protocol that allows users to unlock the value of their Bitcoin on Ergo and Cardano. </div>

<div className="foot2" ><ul><b>anetaBTC</b>
<li><a href="https://team.anetabtc.io/" class="active" target="_blank" style = {{color: theme.links}}>Team</a></li>
<li><a href="https://docs.anetabtc.io/" class="active" target="_blank" style = {{color: theme.links}}>Docs</a></li>
<li><a href="https://play.google.com/store/apps/details?id=io.anetabtc.android" class="active" target="_blank" style = {{color: theme.links}}>Aneta Wallet</a></li>

<li><a href="https://medium.com/@anetaBTC" class="active" target="_blank" style = {{color: theme.links}}>News & Updates</a></li>
<li><a href="https://docs.anetabtc.io/docs/user-guides/Liso/liso-faq" class="active" target="_blank" style = {{color: theme.links}}>FAQ</a></li>
<li><a href="https://medium.com/@anetaBTC/neta-tokenomics-55629989de2b" class="active" target="_blank" style = {{color: theme.links}}>Tokenomics</a></li>

</ul></div>

<div className="foot3"><ul> <b>Resources</b>
<li><a href="https://anetabtc-liso-calculator.herokuapp.com/" class="active" target="_blank" style = {{color: theme.links}}>LISO Calculator</a></li>
<li><a href="https://drive.google.com/drive/folders/13IGRgf9wNCPfckTQ6DSMaIo9gE-wx0zm?usp=sharing" class="active" target="_blank" style = {{color: theme.links}}>Media Kit</a></li>
<li><a href="https://medium.com/@anetaBTC/anetabtc-litepaper-v1-0-171f29b3276a" class="active" target="_blank" style = {{color: theme.links}}>Litepaper</a></li>

<li><a href="https://medium.com/@anetaBTC/roadmap-2-0-b2fe0c47eec6" class="active" target="_blank" style = {{color: theme.links}}>Roadmap</a></li>
<li><a href="https://datastudio.google.com/u/0/reporting/4cb333f9-39bf-448b-8d2d-f7ac3f44ad5d/page/FyZjC" class="active" target="_blank" style = {{color: theme.links}}>Stats</a></li>
<li><a href="./mining.pptx" download style = {{color: theme.links}}>Mining</a></li>
</ul></div>

<div className="foot4"><ul> <b>Foundation</b>

<li><a href="mailto:info@anetabtc.io" class="active" style = {{color: theme.links}}>Contact</a></li>

</ul></div>

<div className="foot5">
<div className="imgconf">
<a href="https://discord.com/invite/ScXG76dJXM" class="active" style = {{filter: theme.imgconf}}><img src={require('./static/icons/discord.svg').default} /></a>
<a href="https://twitter.com/anetaBTC" class="active" style = {{filter: theme.imgconf}}><img src={require('./static/icons/twitter.svg').default} /></a>
<a href="https://medium.com/@anetaBTC" class="active" style = {{filter: theme.imgconf}}><img src={require('./static/icons/medium.svg').default} /></a>
<a href="https://t.me/anetaBTC" class="active" style = {{filter: theme.imgconf}}><img src={require('./static/icons/telegram.svg').default} /></a>
</div>

<b>anetaBTC is a Singapore based DAO.</b></div>
</div>



</footer>
    </div>
  );
}

export default Landing;
