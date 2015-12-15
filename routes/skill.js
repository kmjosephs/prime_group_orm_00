/**
 * Created by kmjosephs on 12/15/15.
 */
var express = require('express');
var router = express.Router();
var Skill = require('../models/skill');
var Skills = require('../models/collections/skills');

/* GET all skills. */
router.get('/', function(req, res, next) {
    Skills.forge()
        .fetch()
        .then(function(collection){
            res.json({data: collection.toJSON()});
        })
        .catch(function(err) {
            next(err);
        });
});
/* POST skill */
router.post('/', function(req, res, next) {
    console.log(req.body);
    Skill.forge({
            skill_name: req.body.name,
        })
        .save()
        .then(function(skill){
            console.log("It works");
            res.json({skill: skill.get('skill_id')});
        })
        .catch(function(err) {
            console.log(err);
            next(err);
        });
});

/* PUT a skill */
router.put('/:id', function(req, res, next){
    Skill.forge({
            skill_id: req.params.id})
        .fetch({require:true})
        .then(function(skill){
            skill.save({skill_name: req.body.name})
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

/* DELETE a skill */
//TODO: DELETE route to delete a talent
router.delete('/:id', function(req, res, next){
    console.log(req.body);
    Skill.forge({
            skill_id: req.params.id})
        .fetch({require:true})
        .then(function(skill){
            skill.destroy()
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