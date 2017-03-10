//use handlebars to fill in the card templates
var source   = $("#card-template").html();
var template = Handlebars.compile(source);
var html    = template(allPlayers);
$("#cards-placeholder").replaceWith(html);

$(document).foundation();

