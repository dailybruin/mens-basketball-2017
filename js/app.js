//use handlebars to fill in the card templates
var source   = $("#card-template").html();
var template = Handlebars.compile(source);
var html    = template(allPlayers);
$("#cards-placeholder").replaceWith(html);

$(document).foundation();

var main = function() {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
};

$(document).ready(main);

// Smooth Scroll on clicking nav items
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body,html').stop().animate({
    scrollTop: $($href).offset().top - 60
  }, 1200);
  return false;
});


// Parallaxing + add class active on scroll
$(document).scroll(function () {
  var scrollPos = $(document).scrollTop() + 100;
  // changing padding of nav a on scroll
    if (scrollPos > 250) {
      $('nav a').addClass('small');
      $('nav img').addClass('move');
      $('nav span').removeClass('movetext');
    } else {
      $('nav a').removeClass('small');
      $('nav img').removeClass('move');
      $('nav span').addClass('movetext');
    }

});

// Setting up cards
allPlayers.forEach(function(element){
  $("#" + element.name_no_space + "Card").flip();
})





$(".flip-toggle").on("click", function () {
  var playerName = $(this).context.id.split("Button")[0];
  var playerCard = playerName + "Card";
  console.log($(this));
  console.log(playerName);
  $("#" + playerCard).flip("toggle");
});
