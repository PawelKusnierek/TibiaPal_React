import tibiapallogo from '../images/tibiapal-logo.png'

function Header() {
    return (
        <div id="header">
            <a href="https://tibiapal.com"><img src={tibiapallogo} alt="TibiaPal beaver logo" style={{ width: '60%' }} /></a>
        </div>
    );
}

export default Header;