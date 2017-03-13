// get the player data from sheet

var allPlayers = [];

class BasketballPlayer {
  constructor(name, stats, blurbs, link) {
    this.name = name;
    this.name_no_space = (name.split(" ")).join("");
    this.stats = stats;
    this.blurbs = blurbs;
    this.link = link;
  }
}

$.ajax({
  dataType: "json",
  url: "https://spreadsheets.google.com/feeds/list/1sCSmajj5x0S5_ehTAuSr6a16-yOYCjsXjwPgivZBuiU/od6/public/values?alt=json"
}).done(function (data) {
  data = data.feed.entry;
  for (var obj in data){
    obj = data[obj];
    var name = obj.gsx$player.$t;
    var blurbs = obj.gsx$blurbs.$t;
    var link = obj.gsx$link.$t;
    // var stats = obj.gsx$finishedupdated31217.$t.split("/");
    var stats = "hi";
    allPlayers.push(new BasketballPlayer(name, stats, blurbs, link));
  }

  //use handlebars to fill in the card templates
  var source   = $("#card-template").html();
  var template = Handlebars.compile(source);
  var html    = template([allPlayers[0]]);
  $("#cards-placeholders").replaceWith(html);

  init();
  
});