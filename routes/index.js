var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble');

/* GET home page. */
router.get('/', Controller.index)

router.get('/scrabble', Controller.getScrabble)

/* GET chart page. */
router.get('/scrabble/chart', Controller.chart)

/* GET form -score. */
router.get('/scrabble/score', Controller.score)

/* POST form -score. */
router.post('/scrabble/score', Controller.getScore)

/* GET scored word page. */
router.get('/scrabble/score/:word', Controller.displayWordScore)

module.exports = router
