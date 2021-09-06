import React, { useState } from "react";
import tibialootsplitphoto from '../../images/analyser.png'

function Tibialootsplit() {
    const [lootSplitType, setLootSplitTypeType] = useState("RegularLootSplit");
    return (
        <div>
            <h4 id="howtouse"><br />How to use TibiaLootSplit:</h4>
            <ol id="instruction-list">
                <li class="instructions-list">In your 'Party Hunt' analyser select 'Copy to Clipboard'</li>
                <li class="instructions-list">Paste the values into the input field and click 'Submit'</li>
            </ol>
            <img id="analyser_image" src={tibialootsplitphoto}
                alt="Picture of 'Party Hunt' analsyer highlighting which button to click"></img>
            <form id="tibialootsplitform">
                <input type="text" id="analyserData" name="analyserData" placeholder="Paste party hunt session log here..." autocomplete="off" />
                <br />
                <span className="LootSplitTypeSpan" onClick={() => { setLootSplitTypeType("RegularLootSplit"); }}>
                    <input type="radio" id="regularlootsplit" name="lootSplitType" value={lootSplitType} checked={lootSplitType === "RegularLootSplit"} />Regular
                </span>
                <span className="LootSplitTypeSpan" onClick={() => { setLootSplitTypeType("ExtraExpensesLootSplit"); }}>
                    <input type="radio" id="extraexpenseslootsplit" name="lootSplitType" value={lootSplitType} checked={lootSplitType === "ExtraExpensesLootSplit"} />Add Extra Expenses
                </span>
                <span className="LootSplitTypeSpan" onClick={() => { setLootSplitTypeType("RemovePlayersLootSplit"); }}>
                    <input type="radio" id="removeplayerslootsplit" name="lootSplitType" value={lootSplitType} checked={lootSplitType === "RemovePlayersLootSplit"} />Remove players
                </span>
                <br />
                <button type="button" onClick={() => {window.initial_submit({ lootSplitType })}} value="Submit"> Submit </button>
                <button type="button" onClick={window.view_tibialootsplit_history} value="History"> History </button>
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