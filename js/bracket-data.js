// get the player data from sheet

var allTeams = [];

class Team {
  constructor(name, record, offense, defensive, players) {
    this.name = name;
    this.record = record;
    this.offense = offense;
    this.defensive = defensive;
    this.players = players;
  }
}

$.ajax({
  dataType: "json",
  url: "https://spreadsheets.google.com/feeds/list/13EkyoRA9tyoefEb1A7-f4vKd94CyK_FijxxkbkW6CgI/od6/public/values?alt=json"
}).done(function (data) {
  data = data.feed.entry;
  for (var player in data){
    allPlayers.append(new Team(name, record, offense, defense, players));
  }
});