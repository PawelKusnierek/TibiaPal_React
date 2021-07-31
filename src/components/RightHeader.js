import tibialogo from '../images/tibia-logo.gif'
import supportedbadge from '../images/supported.png'

function RightHeader() {
    return (
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
    );
}

export default RightHeader;