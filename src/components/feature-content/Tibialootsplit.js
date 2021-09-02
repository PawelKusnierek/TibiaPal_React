import tibialootsplitphoto from '../../images/analyser.png'


function Tibialootsplit() {
    
    function handleSubmit(event) {
        event.preventDefault();
        //initial_submit();
    }
    
    return (
        <div>
            <h4 id="howtouse"><br />How to use TibiaLootSplit:</h4>
            <ol id="instruction-list">
                <li class="instructions-list">In your 'Party Hunt' analyser select 'Copy to Clipboard'</li>
                <li class="instructions-list">Paste the values into the input field and click 'Submit'</li>
            </ol>
            <img id="analyser_image" src={tibialootsplitphoto}
                alt="Picture of 'Party Hunt' analsyer highlighting which button to click"></img>
            <form id="tibialootsplitform" onSubmit={this.handleSubmit}>
                <input type="text" id="analyserData" name="analyserData" placeholder="Paste party hunt session log here..." autocomplete="off" />
                <br />
                <input type="radio" id="regularlootsplit" name="lootsplittype" value="regularlootsplit" checked="checked" />Regular
                <input type="radio" id="extraexpenseslootsplit" name="lootsplittype" value="extraexpenseslootsplit" />Add Extra Expenses
                <input type="radio" id="removeplayerslootsplit" name="lootsplittype" value="removeplayerslootsplit" />Remove players
                <br />
                <input type="submit" id="submitbutton" value="Submit" />
                <input type="button" onClick="location.href='https:/\/tibiapal.com/tibialootsplit';" value="Refresh page" />
                <input type="button" onClick="view_tibialootsplit_history()" value="History" />
            </form>
            <section id="list-remove-players">

            </section>

            <input type="submit" id="submitremoveplayers" value="Calculate!"
                onclick="event.preventDefault(); calculate_remove_players_click()" />
            <section id="results"></section>
            <section id="extra-expenses-div"></section>
            <table id="extra-expense-table" style={{ width: '100%' }}>
                <tr>
                    <th>Player</th>
                    <th>Extra TC expense</th>
                    <th>Extra gold expense (in k)</th>
                </tr>
            </table>
            <section id="extra-container">
                <input type="text" id="TCvalue" name="TCvalue" placeholder="Tibia Coin gold value" autocomplete="off" />
                <input type="submit" id="submitextrabutton" value="Recalculate"
                    onclick="event.preventDefault(); calculate_extra_expenses_click()" />
            </section>

            <p id="h4_history_tls">TibiaLootSplit History</p>

            <table id="tibialootsplit-history-table" style={{ width: '100%' }}>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Players</th>
                    <th>Total Profit</th>
                    <th>Profit per player</th>
                    <th>Results</th>
                </tr>
            </table>
        </div>
    );


}

export default Tibialootsplit;