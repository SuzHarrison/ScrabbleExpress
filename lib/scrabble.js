var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.LETTER_SCORES = {a : 1, b : 3, c : 3, d : 2, e : 1, f : 4, g : 2,
  h : 4,  i : 1,  j : 8,  k : 5,  l : 1,  m : 3,  n : 1,  o : 1,  p : 3,
  q : 10, r : 1, s : 1,  t : 1,  u : 1,  v : 4,  w : 4,  x : 8,  y : 4,
  z : 10}


Scrabble.prototype.wordScore = function(word) {
  var points = 0;
  if (word.length === 0) {
    return 0;
  } else {
  // var score = 50 if (bonus == "true" && word.length == BONUS_NUMBER_OF_LETTERS)
    var wordLowercase = word.toLowerCase().split('');
    for(var letter of wordLowercase) {
      var points = points + Scrabble.LETTER_SCORES[letter]
    }
  }
  if (word.length === 7) {
    points += 50;
  }
  return points;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var win_word = ""
  var win_score = 0;
  for (var word of arrayOfWords) {
    if (win_score < (this.wordScore(word))) {
      win_score = (this.wordScore(word));
      win_word = word;
    } else if (win_score === (this.wordScore(word)) && word.length === 7 && win_word.length !== 7) {
      win_word = word;
    } else if(win_score === (this.wordScore(word)) && win_word.length < word.length) {
      win_word = word;
    }
   }
   return win_word
  };

module.exports = Scrabble;
