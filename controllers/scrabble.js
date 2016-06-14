var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble();

var ScrabbleController = {
  index: function (req, res, next) {
    res.render('index', { title: 'Scrabble Express!' })
  },

  getScrabble: function (req, res) {
      var locals = {}
      locals.title = "Let's play Scrabble!!!!!!!"
      res.render('scrabble', locals)
  },

  chart: function (req, res) {
      var locals = {}
      locals.title = "Scrabble Letter Scores"
      locals.letters = Scrabble.LETTER_SCORES
      res.render('chart', locals)
  },

  // shows a form allowing a user to submit a word for scoring
  score: function (req, res) {
      var locals = {}
      locals.title = "Enter Your Scrabble Word"
      res.render('score', locals)
  },

  // posts a form with users word for scoring
  getScore: function (req, res) {
    var locals = {}
    // .body from user input
    var word = req.body.word
    locals.title = "Word Score"
    locals.word = word
    locals.score = scrabble.wordScore(word)
    res.render('display_score', locals)
  },

  displayWordScore: function (req, res) {
    var locals = {}
    // params from form
    var word = req.params.word
    locals.title = "Your Scrabble Word Score"
    locals.word = word
    locals.score = scrabble.wordScore(word)
    res.render('display_score', locals)
  }
}

module.exports = ScrabbleController
