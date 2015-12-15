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
/* POST talent */
router.post('/', function(req, res, next) {
  Talent.forge({
    talent_legacy_id: req.body.talentLegacyId,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    city: req.body.city,
    state: req.body.state
  })
    .save()
    .then(function(talent){
      res.json({talentId: talent.get('talent_id')});
    })
    .catch(function(err) {
      next(err);
    });
});

//TODO: PUT route to update a talent

//TODO: DELETE route to delete a talent
module.exports = router;
