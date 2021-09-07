function initialize() {
    cookie_notice();
    find_rashid_city();
    enable_expandable_div_buttons();
    add_expandable_nav_item_listener();
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

function enable_expandable_div_buttons() {
    var coll = document.getElementsByClassName("expandable-div");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active-expanded-div");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

function cookie_notice() {
    let  cookies_consented = localStorage.getItem("cookieconsent");
    // if cookies not consented to, display cookie banner
    if (!cookies_consented) {
        document.querySelector(".cookieconsent").style.display = "initial";
    }
}

function cookieConsentClicked() {
    document.querySelector(".cookieconsent").style.display = "none";
    localStorage.setItem("cookieconsent", true);
}

function add_expandable_nav_item_listener() {
    let nav_elements = document.getElementsByClassName("nav-item-expandable")
    var i;

    for (i = 0; i < nav_elements.length; i++) {
        nav_elements[i].addEventListener("mouseover", function (event) {
            let  hidden_list = document.getElementById("nav-item-hidden-list")
            hidden_list.style.display = "initial"
        })
        nav_elements[i].addEventListener("mouseout", function (event) {
            let  hidden_list = document.getElementById("nav-item-hidden-list")
            hidden_list.style.display = "none"
        })
    }
}

function populate_youtube_videos() {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSSKSQ0Q_OJ9vEUtxBDar-g&order=date&type=video&videoSyndicated=true&key=AIzaSyCst8usFdzsoPuPx-C90jARNG7k8kJMgLE'

    let response = fetch(url);
    fetch(url)
        .then(data => { return data.json() })
        .then(res => { console.log(res) })
    return response
}
