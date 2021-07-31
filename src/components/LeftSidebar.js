import rashid from '../images/Rashid.gif'

function LeftSidebar() {
    return (
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
        </nav>);
}

export default LeftSidebar;