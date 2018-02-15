



var user;
var computer;
var result;
var options = ['rock', 'paper', 'scissors'];
var userLabel = $('#user');
var computerLabel = $('#computer');
var winnerLabel = $('#winner');
var rockStats = $('#rockStats');
var paperStats = $('#paperStats');
var scissorStats = $('#scissorStats');
var stats = {
  rock: 0,
  paper: 0,
  scissors: 0,
  rockWins: 0,
  paperWins: 0,
  scissorsWins: 0
}

function computerChoice() {
  var index = Math.floor(Math.random() * 3)
  return options[index];
}

function compare() {
  userIndex = options.indexOf(user);
  computerIndex = options.indexOf(computer);

  if (userIndex === computerIndex) {
    result = 'Tie'
  } else if (computerIndex === options.length - 1 && userIndex == 0 || userIndex > computerIndex) {
    stats[user + 'Wins']++
    result = 'Win'
  } else {
    result = 'Lose';
  } 
}

function printResults() {
  $('#user') = 'User: ' + user;
  $('#computer') = 'Computer: ' + computer;
  $('#result') = 'Result: ' + result;
  var klass = '';
  if (result === 'Win') {
    klass = 'green'
  } else if (result == 'Lose') {
    klass = 'red'
  }
  winnerLabel.className = klass;
}

function startGame(e) {
  user = this.id;
  stats[user]++
  computer = computerChoice();
  compare();
  printResults();
  calcTotals();
}

function calcTotals() {
  $('$rockStats') = 'Rock: ' + stats.rockWins + "/" + stats.rock;
  $('#paperStats') = 'Paper: ' + stats.paperWins + "/" + stats.paper;
  $('#scissorStats') = 'Scissors: ' + stats.scissorsWins + "/" + stats.scissors;
}

var choices = $('#choice');
for (var i in choices) {
  try {
    choices[i].click(startGame);
  } catch(err) {
    //First Load
  }
}
