var Scrabble = require('./scrabble.js');
var scrabble = new Scrabble();
// creating an instance starting at 0


var Player = function(name) {
  this.name   = name;
  this.plays  = [];
};

Player.prototype.play = function(word) {
  if(this.hasWon == true) {
    return false;
  } else {
    this.plays.push(word);
  }
  return this.plays
};

Player.prototype.total_score = function() {
  var scrabble      = new Scrabble;
  var words_played  = this.plays;
  var total         = 0;

  for(var word of words_played){
    total += Number(scrabble.wordScore(word));
  }
  return total;
};

Player.prototype.hasWon = function() {
  var total = this.total;

  if(total >= 100) {
    return true;
  }
  return false;
};

Player.prototype.highestScoringWord = function() {
  return scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  return scrabble.wordScore(this.highestScoringWord(this.plays));
};


module.exports = Player;
