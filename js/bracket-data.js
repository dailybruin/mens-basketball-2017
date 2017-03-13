// get the player data from sheet

var allTeams = [];

class Team {
  constructor(name, record, offense, defense, players) {
    this.name = name;
    this.record = record;
    this.offense = offense;
    this.defense = defense;
    this.players = players;
  }
}

$.ajax({
  dataType: "json",
  url: "https://spreadsheets.google.com/feeds/list/1PiA5WDTFc4rOwlTR7uJyFZOnWRwRUxMPRXi98nG48uc/od6/public/values?alt=json"
}).done(function (data) {
  function isSafe(variable) {
    return variable !== undefined;
  }

  data = data.feed.entry;
  for (var obj in data){
    obj = data[obj];
    var name = obj.gsx$team.$t;
    var info = obj.gsx$infoasbulletpointsundertheteamslogoasof31017.$t;
    var record = isSafe(info.split("Record: ")[1]) ? info.split("Record: ")[1].substr(4) : "";
    var offense = isSafe(info.split("Offensive efficiency: ")[1]) ? info.split("Offensive efficiency: ")[1].substr(1) : "";
    var defense = isSafe(info.split("Defensive efficiency: ")[1]) ? info.split("Defensive efficiency: ")[1].substr(1) : "";
    var players = isSafe(info.split("Players to Watch: ")[1]) ? info.split("Players to Watch: ")[1].replace(" ", "").split(" ") : [];
    allTeams.push(new Team(name, record, offense, defense, players));
  }

  console.log(allTeams);
  //use handlebars to fill in the card templates
  var source   = $("#bracket-template").html();
  var template = Handlebars.compile(source);
  var html    = template([allPlayers[0]]);
  $("#bracket-placeholder").replaceWith(html);

});