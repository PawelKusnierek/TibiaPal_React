function results_from_history(table_cell_id) {
  const history = JSON.parse(
      localStorage.getItem("tibialootsplitresults") || "[]"
  );

  let who_to_pay_and_how_much = history[table_cell_id];
  let history_total_profit = history[parseInt(table_cell_id) + 2];
  let profit_per_person = history[parseInt(table_cell_id) + 1];

  let resultsContent = document.getElementById("results");
  update_the_html(
      who_to_pay_and_how_much,
      history_total_profit,
      profit_per_person,
      resultsContent
  );

  document.getElementById("h4_history_tls").style.display = "none";
  document.getElementById("tibialootsplit-history-table").style.display =
      "none";
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

  let paragraphs = document.getElementById("results").getElementsByTagName("p");
  let number_of_paragraphs = paragraphs.length;

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