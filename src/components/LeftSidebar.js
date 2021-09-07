import reactDom from 'react-dom';
import rashid from '../images/Rashid.gif'
import MainContent from './MainContent'
import AboutContact from './feature-content/AboutContact'
import Tibialootsplit from './feature-content/Tibialootsplit'
import { useEffect } from 'react';

function LeftSidebar() {
    useEffect(() => { find_rashid_city() });

    return (
        <nav id="left-sidebar">
            <div id="latestNewsId" className="nav-item active" onClick={activateLatestNews}>Latest News</div>
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

        let content = document.getElementById("main-content")
        reactDom.unmountComponentAtNode(content)
        reactDom.render(<MainContent></MainContent>, content)
    }

    function activateAboutContact() {
        eraseActive();
        document.getElementById("aboutContactId").classList.add("active");

        let content = document.getElementById("main-content")
        reactDom.unmountComponentAtNode(content)
        reactDom.render(<AboutContact></AboutContact>, content)
    }

    function activateTibiaLootSplit() {
        eraseActive();
        document.getElementById("tibiaLootSplitId").classList.add("active");

        let content = document.getElementById("main-content")
        reactDom.unmountComponentAtNode(content)
        reactDom.render(<Tibialootsplit></Tibialootsplit>, content)
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

    function find_rashid_city() {
        let time = new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeStyle: "short",
            timeZone: "Europe/Berlin",
        }).format(new Date());
        let first_comma = time.indexOf(",");
        let day = time.substring(0, first_comma);
        let hour = parseInt(time.substring(time.length - 5, time.length - 3));

        let content_city = document.getElementById("rashid-city");

        if (hour > 9) {
            let city = find_city_based_on_day(day);
            content_city.innerHTML = "Rashid in " + city;
        } else {
            let previous_day = find_previous_day(day);
            let city = find_city_based_on_day(previous_day);
            content_city.innerHTML = "Rashid in " + city;
        }
    }

    function find_city_based_on_day(day) {
        if (day === "Monday") {
            return "Svargrond";
        } else if (day === "Tuesday") {
            return "Liberty Bay";
        } else if (day === "Wednesday") {
            return "Port Hope";
        } else if (day === "Thursday") {
            return "Ankrahmun";
        } else if (day === "Friday") {
            return "Darashia";
        } else if (day === "Saturday") {
            return "Edron";
        } else if (day === "Sunday") {
            return "Carlin";
        }
    }

    function find_previous_day(day) {
        if (day === "Monday") {
            return "Sunday";
        } else if (day === "Tuesday") {
            return "Monday";
        } else if (day === "Wednesday") {
            return "Tuesday";
        } else if (day === "Thursday") {
            return "Wednesday";
        } else if (day === "Friday") {
            return "Thursday";
        } else if (day === "Saturday") {
            return "Friday";
        } else if (day === "Sunday") {
            return "Saturday";
        }
    }
}












export default LeftSidebar;