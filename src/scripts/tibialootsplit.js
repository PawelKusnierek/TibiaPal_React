  function calculate_remove_players_click() {
    list_of_players_to_remove = [];
    list_of_players_to_keep = [];
    for (var i = 0; i < players_and_their_balance.length; i++) {
      player = players_and_their_balance[i].name;
      checkbox_player = document.getElementById(player);
      checked = checkbox_player.checked;
      if (!checked) {
        list_of_players_to_remove.push(player);
      } else {
        list_of_players_to_keep.push(player);
      }
    }
    if (list_of_players_to_remove.length > 0) {
      player_names_list = list_of_players_to_keep;
      for (var j = 0; j < list_of_players_to_remove.length; j++) {
        for (var k = players_and_their_balance.length - 1; k >= 0; k--) {
          if (players_and_their_balance[k].name == list_of_players_to_remove[j]) {
            players_and_their_balance.splice(k, 1);
          }
        }
      }
    }
    number_of_players = number_of_players - list_of_players_to_remove.length;
  
    total_profit = find_total_profit(players_and_their_balance);
    profit_per_person = total_profit / number_of_players;
  
    // Main logic part - works very well even if looks confusing, advise againt touching....
    who_to_pay_and_how_much = final_split(
      players_and_their_balance,
      profit_per_person,
      number_of_players
    );
  
    document.getElementById("list-remove-players").innerHTML = "";
    calculate_button = document.getElementById("submitremoveplayers");
    calculate_button.style.display = "none";
  
    // Final update back to the site
    var results = document.createElement("div");
    results.setAttribute("id", "results");
    main_content.appendChild(results);
  
    update_the_html(
      who_to_pay_and_how_much,
      total_profit,
      profit_per_person,
      resultsContent
    );
    update_the_history_results();
    document.getElementById("extra-expenses-div").innerHTML = "";
  }
  
  
  function calculate_extra_expenses_click() {
    tibia_coin_value = document.getElementById("TCvalue").value;
    var tableRef = document
      .getElementById("extra-expense-table")
      .getElementsByTagName("tbody")[0];
    for (i = 1; i < tableRef.children.length; i++) {
      player_name = tableRef.children[i].cells[0].innerHTML;
      player_extra_tc = tableRef.children[i].cells[1].firstChild.value;
      player_extra_gold = tableRef.children[i].cells[2].firstChild.value;
      player_extra_expense =
        player_extra_tc * tibia_coin_value + player_extra_gold * 1000;
      total_profit = total_profit - player_extra_expense;
      players_and_their_balance[i - 1].balance =
        parseInt(players_and_their_balance[i - 1].balance) - player_extra_expense;
    }
  
    // re-calculating the payout based on updated figured
    profit_per_person = total_profit / number_of_players;
    who_to_pay_and_how_much = final_split(
      players_and_their_balance,
      profit_per_person,
      number_of_players
    );
  
    // Final update back to the site
    var results = document.createElement("div");
    results.setAttribute("id", "results");
    main_content.appendChild(results);
  
    update_the_html(
      who_to_pay_and_how_much,
      total_profit,
      profit_per_person,
      resultsContent
    );
    update_the_history_results();
    remove_old_html();
  }

  

  

  

  

  
  
  
  
  
  function copy_to_clipboard(transferMsg, who_to_pay) {
    let attrid = who_to_pay.replace(/[^A-Z0-9]/gi, "_");
    let container = document.querySelector("#page-container");
    let input = document.createElement("input");
  
    input.type = "text";
    input.id = attrid;
    input.className = "hiddeninput";
    input.value = transferMsg;
    container.appendChild(input);
  
    let text_to_copy = document.querySelector(`#${attrid}`);
  
    text_to_copy.select();
    document.execCommand("copy");
  
    text_to_copy.remove();
  }
  
  function copy_whole_log() {
    let container = document.querySelector("#results");
    let discord_output_element = document.createElement("div");
  
    //discord_output_element.type = "textarea"
    discord_output_element.id = "discord_output_id";
    discord_output_element.className = "hiddeninput";
    discord_output_element.style.position = "fixed";
    discord_output_element.style.pointerEvents = "none";
    discord_output_element.style.opacity = 0;
    discord_output_element.innerHTML = "";
  
    paragraphs = document.getElementById("results").getElementsByTagName("p");
    number_of_paragraphs = paragraphs.length;
  
    var discord_output = "";
  
    for (i = 0; i < number_of_paragraphs; i++) {
      discord_output = discord_output + paragraphs[i].innerHTML + "<br /><br />";
    }
  
    var activeSheets = Array.prototype.slice
      .call(document.styleSheets)
      .filter(function (sheet) {
        return !sheet.disabled;
      });
  
    discord_output_element.innerHTML = discord_output;
  
    document.body.appendChild(discord_output_element);
  
    window.getSelection().removeAllRanges();
  
    var range = document.createRange();
    range.selectNode(discord_output_element);
    window.getSelection().addRange(range);
  
    document.execCommand("copy");
  
    for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = true;
  
    document.execCommand("copy");
  
    for (var i = 0; i < activeSheets.length; i++)
      activeSheets[i].disabled = false;
  }
  
  
  
  function remove_old_html() {
    main_content = document.getElementById("main-content");
    extraExpensesDiv = document.getElementById("extra-expenses-div");
    extraExpensesDiv.innerHTML = "";
    extraExpensesTable = document.getElementById("extra-expense-table");
    main_content.removeChild(extraExpensesTable);
    extraContainer = document.getElementById("extra-container");
    main_content.removeChild(extraContainer);
  }
  
 
  
  
  
  
  
  function results_from_history(table_cell_id) {
    const history = JSON.parse(
      localStorage.getItem("tibialootsplitresults") || "[]"
    );
  
    who_to_pay_and_how_much = history[table_cell_id];
    total_profit = history[parseInt(table_cell_id) + 2];
    profit_per_person = history[parseInt(table_cell_id) + 1];
  
    resultsContent = document.getElementById("results");
    update_the_html(
      who_to_pay_and_how_much,
      total_profit,
      profit_per_person,
      resultsContent
    );
  
    document.getElementById("h4_history_tls").style.display = "none";
    document.getElementById("tibialootsplit-history-table").style.display =
      "none";
  }
  