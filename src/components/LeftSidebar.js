import rashid from '../images/Rashid.gif'

function LeftSidebar() {

    return (
        <nav id="left-sidebar">
            <div id="latestNewsId" className="nav-item active" onLoad={activateLatestNews} onClick={activateLatestNews}>Latest News</div>
            <div id="aboutContactId" className="nav-item" onClick={activateAboutContact}>About & Contact</div>
            <div id="tibiaLootSplitId" className="nav-item" onClick={activateTibiaLootSplit}>TibiaLootSplit</div>
            <div id="bossTimersId" className="nav-item" onClick={activateBossTimers}>Boss Timers</div>
            <div id="huntingPlacesId" className="nav-item" onClick={activateHuntingPlaces}>Hunting Places</div>
            <div id="bestiaryReferenceId" className="nav-item" onClick={activateBestiaryReference}>Bestiary Reference</div>
            <div id="exerciseWeaponsId" className="nav-item" onClick={activateExerciseWeapons}>Exercise Weapons Calculator </div>
            <div id="imbueId" className="nav-item" onClick={activateImbue}>Imbue Calculator</div>
            <div id="otherToolsId" className="nav-item nav-item-expandable" onClick={activateOtherTools}>Other Tools
                <ul id="nav-item-hidden-list">
                    <li id="" className="nav-item-hidden" onClick={activateExpShare}>Exp Share Calculator</li>
                    <li id="" className="nav-item-hidden" onClick={activateStamina}>Stamina Calculator</li>
                    <li id="" className="nav-item-hidden" onClick={activateLeech}>Leech Calculator</li>
                    <li id="" className="nav-item-hidden" onClick={activateExp}>Exp Calculator</li>
                    <li id="" className="nav-item-hidden" onClick={activateOfflineTraining}>Offline Training</li>
                    <li id="" className="nav-item-hidden" onClick={activateHouses}>House Auctions</li>
                    <li id="" className="nav-item-hidden" onClick={activateWeaponsReference}>Weapons Reference</li>
                </ul>
            </div>
            <div id="donatorsId" className="nav-item" onClick={activateDonators}>Donators</div>
            <div className="right-sidebar-item" id="Rashid"><img src={rashid} style={{ width: '45%' }} alt="Rashid" /></div>
            <div id="rashid-city">Unavailable...</div>
        </nav>);

    function eraseActive() {
        let ar = document.getElementsByClassName("active");
        ar[0].classList.remove("active");
    }

    function activateLatestNews() {
        eraseActive();
        document.getElementById("latestNewsId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Latest News";
    }

    function activateAboutContact() {
        eraseActive();
        document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "About & Contact";
    }

    function activateTibiaLootSplit() {
        eraseActive();
        document.getElementById("tibiaLootSplitId").classList.add("active");
        document.getElementById("main-content").innerHTML = "TibiaLootSplit";
    }

    function activateBossTimers() {
        eraseActive();
        document.getElementById("bossTimersId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Boss Timers";
    }

    function activateHuntingPlaces() {
        eraseActive();
        document.getElementById("huntingPlacesId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Hunting Places";
    }

    function activateBestiaryReference() {
        eraseActive();
        document.getElementById("bestiaryReferenceId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Bestiary Refernce";
    }

    function activateImbue() {
        eraseActive();
        document.getElementById("imbueId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Imbue Calculator";
    }

    function activateExerciseWeapons() {
        eraseActive();
        document.getElementById("exerciseWeaponsId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Exercise Weapons";
    }

    function activateOtherTools() {
        /*
        eraseActive();
        document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "About & Contact";
        */
    }

    function activateExpShare() {
        eraseActive();
        //document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Exp Share";
    }

    function activateStamina() {
        eraseActive();
        //document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Stamina";
    }

    function activateLeech() {
        eraseActive();
        //document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Leech";
    }

    function activateExp() {
        eraseActive();
        //document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Exp";
    }

    function activateOfflineTraining() {
        eraseActive();
        //document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Offline";
    }

    function activateHouses() {
        eraseActive();
        //document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Houses";
    }

    function activateWeaponsReference() {
        eraseActive();
        //document.getElementById("aboutContactId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Weapons";
    }

    function activateDonators() {
        eraseActive();
        document.getElementById("donatorsId").classList.add("active");
        document.getElementById("main-content").innerHTML = "Donators";
    }
}












export default LeftSidebar;