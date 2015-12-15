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
    console.log(req.body);
  Talent.forge({
    talent_legacy_id: req.body.talentLegacyId,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    city: req.body.city,
    state: req.body.state
  })
    .save()
    .then(function(talent){
    console.log("It works");
      res.json({talentId: talent.get('talent_id')});
    })
    .catch(function(err) {
        console.log(err);
      next(err);
    });
});

//TODO: PUT route to update a talent
router.put('/', function(req, res, next){
  Talent.forge({
    talent_legacy_id: req.body.talentLegacyId})
      .fetch({require:true})
      .then(function(talent){
        talent.save({city: req.body.city})
            .then(function(){
                res.send();
            })
          .catch(function(err){
            console.log(err);
        });
      })

      .catch(function(err){
        console.log(err);
      });

});

//TODO: DELETE route to delete a talent
router.delete('/:id', function(req, res, next){
    console.log(req.body);
    Talent.forge({
        talent_legacy_id: req.params.id})
    .fetch({require:true})
    .then(function(talent){
        talent.destroy()
        .then(function(){
            res.send();
        })
        .catch(function(err){
            console.log(err);
        });
    })
    .catch(function(err){
       console.log(err);
    });
});
module.exports = router;
