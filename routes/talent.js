var express = require('express');
var router = express.Router();
var Talent = require('../models/talent');
var Talents = require('../models/collections/talents');

/* GET all talent. */
router.get('/', function(req, res, next) {
  Talents.forge()
    .fetch()
    .then(function(collection){
      res.json({data: collection.toJSON()});
    })
    .catch(function(err) {
      next(err);
    });
});

module.exports = router;
