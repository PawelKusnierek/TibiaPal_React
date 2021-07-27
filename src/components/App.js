import tibiapallogo from '../images/tibiapal-logo.png'
import tibialogo from '../images/tibia-logo.gif'
import supportedbadge from '../images/supported.png'
import rashid from '../images/Rashid.gif'



function App() {
  return (
    <div id="main-containter">
      <div id="header">
        <a href="https://tibiapal.com"><img src={tibiapallogo} alt="TibiaPal beaver logo" style={{ width: '60%' }} /></a>
      </div>

      <div id="banner">
        TO BE USED FOR ADSENSE
      </div>

      <div id="right-header">
        <span className="right-sidebar-item">
          <a href="https://www.tibia.com/community/?subtopic=fansites"
            target="_blank" rel="noreferrer">
            <img src={supportedbadge} className="right-sidebar-item" alt="Tibia Supported Fansite Logo" style={{ width: '35%' }} />
          </a>
        </span>
        
        <span className="right-sidebar-item">
          <a href="https://www.tibia.com" target="_blank" rel="noreferrer">
            <img src={tibialogo} className="right-sidebar-item" alt="Tibia.com logo" style={{ width: '45%' }} />
          </a>
        </span>
      </div>

      <nav id="left-sidebar">
        <div className="nav-item"><a href="https://tibiapal.com">Latest News</a></div>
        <div className="nav-item"><a href="https://tibiapal.com/about">About & Contact</a></div>
        <div className="nav-item"><a href="https://tibiapal.com/tibialootsplit">TibiaLootSplit</a></div>
        <div className="nav-item"><a href="https://tibiapal.com/bosstimers">Boss Timers</a></div>
        <div className="nav-item"><a href="https://tibiapal.com/hunting">Hunting Places</a></div>
        <div className="nav-item"><a href="https://tibiapal.com/videos">Videos & Guides</a></div>
        <div className="nav-item"><a href="https://tibiapal.com/bestiary">Bestiary Reference</a></div>
        <div className="nav-item"><a href="https://tibiapal.com/exercise">Exercise Weapons Calculator</a> </div>
        <div className="nav-item"><a href="https://tibiapal.com/imbue">Imbue Calculator</a></div>
        <div className="nav-item nav-item-expandable"><a href="https://tibiapal.com/othertools">Other Tools</a>
          <ul id="nav-item-hidden-list">
            <li className="nav-item-hidden"><a href="https://tibiapal.com/expshare">Exp Share Calculator</a></li>
            <li className="nav-item-hidden"><a href="https://tibiapal.com/stamina">Stamina Calculator</a></li>
            <li className="nav-item-hidden"><a href="https://tibiapal.com/leech">Leech Calculator</a></li>
            <li className="nav-item-hidden"><a href="https://tibiapal.com/expcalculator">Exp Calculator</a></li>
            <li className="nav-item-hidden"><a href="https://tibiapal.com/offlinetraining">Offline Training</a></li>
            <li className="nav-item-hidden"><a href="https://tibiapal.com/auctions">House Auctions</a></li>
            <li className="nav-item-hidden"><a href="https://tibiapal.com/weapons">Weapons Reference</a></li>
          </ul>
        </div>
        <div className="nav-item"><a href="https://tibiapal.com/donators">Donators</a></div>
        <div className="right-sidebar-item" id="Rashid"><img src={rashid} style={{ width: '45%' }} alt="Rashid" /></div>
        <div id="rashid-city">Unavailable...</div>
      </nav>

      <section id="main-content">
      123123
      </section>

      <aside id="right-sidebar">
        <section id="banner-paragraph">
          <p class="donationparagraph">Subscribe to our YouTube channel for Tibia guides!<br />
            <a href="https://www.youtube.com/Kusnierr" target="_blank">youtube.com/Kusnierr</a>
          </p>
          <section id="youtube-videos-container">
            <h4><br />Latest Videos:</h4>

            <div><br />Werelions -1 EK 300+ up to 5.3 kk/h exp and 1.2 kk/h profit<br /><br /></div>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/7lL9Eu4gEfY?autoplay=0"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

            <div><br /><br />[2-in-1 GUIDE] Draken Walls for EK level 200+ and 400+<br /><br /></div>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/_Nl5iLP_ysw?autoplay=0"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

            <div><br /><br />Drefia Grim Reapers 300+ EK, up to 4.5 kk/h exp<br /><br /></div>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/sUyHb_pEeRQ?autoplay=0"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </section>
        </section>

        <div id="discord-container">
          <div>GOOGLE AD </div>
        </div>
      </aside>

      <aside id="left-footer-space"></aside>

      <footer id="footer">
        <p id="footerParagraph">
          Tibia and all products related to Tibia are copyrighted by <a href="https://www.cipsoft.com"
            target="_blank">CipSoft GmbH</a>. The official
          website of Tibia is <a href="https://www.tibia.com" target="_blank">tibia.com</a>.<br /><br />

          Created by Kusnier.
        </p><br />
      </footer>

      <aside id="right-footer-space"></aside>

    </div>
  );
}

export default App;
