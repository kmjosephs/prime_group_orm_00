/**
 * Skills Collection
 */
var Skill = require('../skill');
var Bookshelf = require('../db/bookshelf');

var Skills = Bookshelf.Collection.extend({
  model: Skill
});

module.exports = Skills;