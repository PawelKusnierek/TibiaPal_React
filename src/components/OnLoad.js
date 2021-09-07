import { useEffect } from 'react';

function OnLoad() {

  useEffect(() => { cookie_notice() });
  useEffect(() => { enable_expandable_div_buttons() });
  useEffect(() => { add_expandable_nav_item_listener() });

  return (
    <div class="cookieconsent">
      TibiaPal.com uses cookies to ensure you get the best experience possible. By continuing to use this website, you
      agree to their use. You can find more information about our cookies in our Privacy Policy which can be found under the 'About & Contact' section of the nabigation bar. <br /><br />
      <a href="#" onClick={cookieConsentClicked}>Confirm</a>
    </div>
  );

  function cookie_notice() {
    let cookies_consented = localStorage.getItem("cookieconsent");
    // if cookies not consented to, display cookie banner
    if (!cookies_consented) {
      document.querySelector(".cookieconsent").style.display = "initial";
    }
  }

  function cookieConsentClicked() {
    document.querySelector(".cookieconsent").style.display = "none";
    localStorage.setItem("cookieconsent", true);
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

  function add_expandable_nav_item_listener() {
    let nav_elements = document.getElementsByClassName("nav-item-expandable")
    var i;

    for (i = 0; i < nav_elements.length; i++) {
      nav_elements[i].addEventListener("mouseover", function (event) {
        let hidden_list = document.getElementById("nav-item-hidden-list")
        hidden_list.style.display = "initial"
      })
      nav_elements[i].addEventListener("mouseout", function (event) {
        let hidden_list = document.getElementById("nav-item-hidden-list")
        hidden_list.style.display = "none"
      })
    }
  }
}

export default OnLoad;
