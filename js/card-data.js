class PositionPlayer {
  // constructor() { }
  constructor(photo_cred, player_name, muglink, position, abbr_position, year, number, height, weight, games, avg, obp, slg, hr, rbi, source, time_of_source, bats, throws, blurb) {
    this.type_position_player = true;
    this.player_name = player_name;
    this.first_name = player_name.split(" ")[0];
    this.last_name = player_name.split(" ")[1];
    this.name_no_space = player_name.replace(/\s+/g, '');
    this.muglink = muglink;
    this.position = position;
    this.abbr_position = abbr_position;
    this.year = year;
    this.number = number;
    this.height = height;
    this.weight = weight;
    this.games = games;
    this.avg = avg;
    this.obp = obp;
    this.slg = slg;
    this.hr = hr;
    this.rbi = rbi;
    this.source = source;
    this.time_of_source = time_of_source;
    this.bats = bats;
    this.throws = throws;
    this.blurb = blurb;
    this.photo_cred = photo_cred;
  }

}

class CatcherPlayer {
  // constructor() { }
  constructor(photo_cred, player_name, muglink, year, number, height, weight, games, games_started, w_l, era, so, ip, source, time_of_source, bats, throws, blurb) {
    this.type_position_player = false;
    this.player_name = player_name;
    this.first_name = player_name.split(" ")[0];
    this.last_name = player_name.split(" ")[1];
    this.name_no_space = player_name.replace(/\s+/g, '');
    this.muglink = muglink;
    this.year = year;
    this.number = number;
    this.height = height;
    this.weight = weight;
    this.games = games;
    this.games_started = games_started;
    this.w_l = w_l;
    this.era = era;
    this.so = so;
    this.ip = ip;
    this.source = source;
    this.time_of_source = time_of_source;
    this.bats = bats;
    this.throws = throws;
    this.blurb = blurb;
    this.photo_cred = photo_cred;
  }

}

var allPlayers = [];

//position players
allPlayers.push(new PositionPlayer("Daily Bruin file photo", "Brett Stephens", "http://www.uclabruins.com/images/2016/12/29/Stephens_Brett.jpg", "Left Field", "LF", "Senior", "9", "6\'0\"", "178", "55", ".223", ".335", ".309", "0", "19", "2016 DIVISION I STATS", "", "L", "R",
String.raw`It will be interesting to see which Brett Stephens shows up in 2017. The outfielder slashed .298/.382/.424 as a sophomore in 2015, but couldn't repeat that success as a junior. Had he posted similar numbers in 2016, a Major League team likely would have drafted the outfielder. Instead, he'll spend another year in Westwood to pad his resume for this summer's draft.`));
allPlayers.push(new PositionPlayer("Jintak Han", "Daniel Amaral", "http://www.uclabruins.com/images/2016/12/28/Amaral_Daniel.jpg", "Center Fied", "CF", "Sophomore", "25", "5\'11\"", "197", "29", ".178", ".255", ".178", "0", "2", "2016 DIVISION I STATS", "", "R", "R",
String.raw`UCLA will look to Daniel Amaral to lead off and create chaos on the basepaths. His speed should also help him track down balls in center. The sophomore batted .302 and stole 34 bases in 52 games in the Northwoods League last summer. If he needs any advice, he can ask his older brother Beau, who hit .322 in his three-year career as a UCLA outfielder.`));
allPlayers.push(new PositionPlayer("Jintak Han", "Michael Toglia", "http://www.uclabruins.com/images/2016/12/28/Toglia_Michael.jpg", "Right Field", "RF", "Freshman", "7", "6\'5\"", "201", "45", ".306", ".402", ".547", "7", "40", "2016 WEST COAST LEAGUE STATS", "", "S", "L",
String.raw`The Colorado Rockies drafted Michael Toglia in the 35th round of last year's draft, but the lanky outfielder chose to attend UCLA instead. Toglia led the West Coast league in home runs last summer, earning MVP honors in the process. He's a switch hitter with power to all fields who will bat in the middle of the lineup in his first year with the Bruins. His arm is solid, but not a cannon, and he can also play first base.`));
allPlayers.push(new PositionPlayer("Jintak Han", "Ryan Kreidler", "http://www.uclabruins.com/images/2016/12/28/kreidler_ryan.jpg", "Third Base", "3B", "Freshman", "3", "6\'2\"", "195", "29", ".346", ".521", ".592", "3", "27", "2016 HIGH SCHOOL STATS", "", "R", "R",
String.raw`Ryan Kreidler is a true shortstop, but he'll play third base in 2017 to get a spot in the lineup. He'll likely move to short when the position becomes available. Perfect Game USA named him California's 23rd best prospect in his class and the Chicago Cubs spent their 35th round selection on the infielder. Coach John Savage called him a "star in the making."`));
allPlayers.push(new PositionPlayer("Jintak Han", "Nick Valaika", "http://www.uclabruins.com/images/2016/12/29/Valaika_Nick.jpg", "Shortstop", "SS", "Redshirt sophomore", "4", "5\'11\"", "186", "11", ".150", ".150", ".200", "0", "2", "2016 DIVISION I STATS", "", "R", "R",
String.raw`The injured hamate bone that kept Nick Valaika from swinging a bat last year has healed. Valaika was only supposed to miss a few weeks of 2016 with the hand injury, but he never played a game and took a medical redshirt year instead. The lack of a true shortstop up the middle, in the lineup and in the clubhouse was one big reason UCLA had such a disappointing record last year, finishing at 25-31.`));
allPlayers.push(new PositionPlayer("Jintak Han", "Jake Hirabayashi", "http://www.uclabruins.com/images/2016/12/29/Hirabayashi_Jake.jpg", "Second Base", "2B", "Sophomore", "28", "5\'11\"", "185", "26", ".106", ".203", ".121", "0", "5", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Jake Hirabayashi was placed in a tough spot in 2016. In desperate need of catching depth, UCLA hastily converted the then-freshman into a backstop. He struggled offensively, and ended up losing his share of the job. This year, Hirabayashi will return to his natural role as an infielder and split time at second base. In summer ball, he walked more than he struck out and stole six of seven bases.`));
allPlayers.push(new PositionPlayer("Jintak Han", "Chase Strumpf", "http://www.uclabruins.com/images/2016/12/28/Strumpf_Chase.jpg", "Second Base", "2B", "Freshman", "33", "6\'1\"", "197", "37", ".247", ".318", ".762", "6", "30", "2016 WEST COAST LEAGUE STATS", "", "R", "R",
String.raw`Chase Strumpf was one of three players coach John Savage called the "headliners" of the freshman class, along with Michael Toglia and Ryan Kreidler. Strumpf was a shortstop in high school. Second base was the only infield or outfield position for which Savage didn't name a number one, so the freshman will get a chance to fight for the spot this season.`));
allPlayers.push(new PositionPlayer("Daily Bruin file photo", "Sean Bouchard", "http://www.uclabruins.com/images/2016/12/28/Bouchard_Sean.jpg", "First Base", "1B", "Junior", "5", "6\'3\"", "215", "43", ".295", ".354", ".436", "2", "36", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Sean Bouchard proved his worth as a gap hitter last season, stroking eight doubles and four triples while leading the team in RBI. Coaches say he has home run power, but with only four long balls in his NCAA career, he's yet to show it. The junior will be draft eligible at the end of the season, and some home runs would help his prospect status.`));
allPlayers.push(new PositionPlayer("Jintak Han", "Daniel Rosica", "http://www.uclabruins.com/images/2016/12/29/Rosica_Daniel.jpg", "Catcher", "C", "Redshirt sophomore", "47", "5\'11\"", "180", "44", ".264", ".338", ".347", "0", "14", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Daniel Rosica was never supposed to play. He got into UCLA for academics, and the team took him as a bullpen catcher. When an injury compromised last year's catching depth, Rosica stepped up. At first he split time with Jake Hirabayashi, but strong offense ended up winning him the the job. In 2017, he'll get a chance to hang onto the job he earned last year.`));
allPlayers.push(new PositionPlayer("Jintak Han", "Gavin Johns", "http://www.uclabruins.com/images/2016/12/28/Johns_Gavin.jpg", "Catcher", "C", "Sophomore", "31", "6\'2\"", "200", "67", ".351", ".429", ".641", "16", "60", "2016 JUNIOR COLLEGE STATS", "", "S", "R",
String.raw`UCLA recruits high school players almost exclusively, but they made an exception for Gavin Johns. The team took Johns after one year of junior college to fortify its catching depth. Johns' team won the 2016 JUCO World Series last year. As a switch hitter with power, he'll make a good platoon mate in a catching situation that's much, much deeper than last year's,`));
allPlayers.push(new PositionPlayer("Jintak Han", "Will Mclnerny", "http://www.uclabruins.com/images/2016/12/28/McInerny_Will.jpg", "Catcher", "C", "Freshman", "15", "6\'0\"", "177", "32", ".321", ".434", ".532", "1", "21", "2016 HIGH SCHOOL STATS", "", "R", "R",
String.raw`Will McInerny will be the freshman in what coach John Savage called a "three-headed monster" behind the plate. Perfect Game USA ranked him as California's No. 22 catcher. He has a strong arm and he comes from a very athletic family. His father played for three different MLB clubs, and his older brother played both football and baseball at Cal.`));

//catchers
allPlayers.push(new CatcherPlayer("Daily Bruin file photo", "Griffin Canning", "http://www.uclabruins.com/images/2016/12/28/Canning_Griffin.jpg", "Junior", "55", "6\'2\"", "180", "15", "15", "5-8", "3.7", "95", "109.1", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Griffin Canning started last season as UCLA's No. 2 starter, but he became the Bruins' ace before Pac-12 play even began. He's starting out as the No. 1 this time around, and he'll be delivering a mix of fastballs, change ups, curve balls and sliders on Friday nights. MLB Pipeline listed him as the 39th best prospect for the 2017 draft, so he'll likely be the first Bruin off the board in June.`));
allPlayers.push(new CatcherPlayer("Daily Bruin file photo", "Jake Bird", "http://www.uclabruins.com/images/2016/12/28/Bird_Jake.jpg", "Junior", "14", "6\'3\"", "200", "28", "7", "1-6", "6.36", "22", "46.2", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Sinkerballer Jake Bird never quite settled into a role last season. He made a few Tuesday starts and also spent time in the bullpen. He posted a 2.77 ERA in seven starts in the Cape Cod League last summer with a strikeout to walk ratio of close to three. He and Griffin Canning were the only two Bruins on Perfect Game USA's top 100 college MLB prospects list.`));
allPlayers.push(new CatcherPlayer("Daily Bruin file photo", "Jon Olsen", "http://www.uclabruins.com/images/2016/12/29/Olsen_Jon.jpg", "Sophomore", "11", "6\'3\"", "202", "11", "5", "0-0", "7.36", "7", "18.1", "2016 DIVISION I STATS", "", "R", "R",
String.raw`UCLA struggled to find a consistent Tuesday starter for much of last season. By the end of the year, the Tuesday plan was Jon Olsen plus the staff. Olsen made five midweek starts in 2016, but the longest one was only 3.1 innings. Olsen consistently pitched deep into games in his seven starts last summer in the West Coast League, though, averaging over six innings per start.`));
allPlayers.push(new CatcherPlayer("Daily Bruin file photo", "Justin Hooper", "http://www.uclabruins.com/images/2016/12/29/Hooper_Justin.jpg", "Sophomore", "12", "6\'7\"", "232", "14", "1", "1-1", "18", "9", "8", "2016 DIVISION I STATS", "", "R", "L",
String.raw`Of the players in the high school class of 2015, Justin Hooper was rated the No. 1 prospect in California and the No. 1 left handed pitcher in the country. He only started one game last year, and it was a disaster. He walked five, hit two and allowed five runs in just one inning. The big lefty overhauled his delivery in the offseason. His ceiling remains high, but when he'll reach it is still unclear.`));
allPlayers.push(new CatcherPlayer("Daily Bruin file photo", "Moises Ceja", "http://www.uclabruins.com/images/2014/2/4/IGVOAJDOCHMYDCO.20140204202128.jpg", "Senior", "40", "6\'0\"", "179", "25", "0", "2-1", "2.6", "23", "27.2", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Moises Ceja wasn't assinged an inning at the start of last season, so he took the biggest one. When Brian Gadsby began to struggle as the closer, Ceja seized the ninth inning and ended the season with four saves. He posted a 4.50 ERA in the Cape Cod League last summer, but also had a strikeout to walk ratio of better than six. He'll be handling the sixth inning.`));
allPlayers.push(new CatcherPlayer("Jintak Han", "Matt Walker", "http://www.uclabruins.com/images/2016/12/29/Walker_Matt.jpg", "Redshirt sophomore", "30", "6\'4\"", "200", "21", "7", "5-3", "2.95", "56", "79.1", "2016 JUNIOR COLLEGE STATS", "", "R", "R",
String.raw`Matt Walker came to UCLA his freshman year and redshirted, then went to pitch at Fresno City College for a year, where he led his team in saves. This year, he transfered back to UCLA and will be handling the seventh. He posted a 2.67 ERA in six starts at the California Collegiate League last summer.`));
allPlayers.push(new CatcherPlayer("Daily Bruin file photo", "Scott Burke", "http://www.uclabruins.com/images/2016/12/28/Burke_Scott.jpg", "Senior", "10", "6\'3\"", "197", "27", "0", "2-2", "4.38", "30", "37", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Scott Burke worked primarily in long relief last season and led non-starters in innings pitched. With last year's setup man – Tucker Forbes  – electing not to play in his final year of eligibility, Burke will take over the eighth inning. He held opponents to a .239 average against last season, the lowest mark on the team.`));
allPlayers.push(new CatcherPlayer("Daily Bruin file photo", "Brian Gadsby", "http://www.uclabruins.com/images/2016/12/29/Gadsby_Brian.jpg", "Sophomore", "26", "6\'0\"", "170", "25", "0", "3-0", "4.54", "28", "33.2", "2016 DIVISION I STATS", "", "R", "R",
String.raw`Brian Gadsby started the 2016 season as UCLA's closer, filling the shoes of one of the greatest closers in NCAA history: David Berg. Gadsby scuffled as a freshman, but there are reasons to believe he'll be better this year. His velocity is up five miles per hour, and he pitched to a 2.37 ERA as a reliever in the Northwoods League last summer. He'll be varying his arm slots to keep hitters off balance in the ninth inning.`));

console.log(allPlayers)
