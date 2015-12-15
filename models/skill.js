/**
 * Skill model
 */
var Bookshelf = require('./db/bookshelf');
var Talent = require('./talent');

var Skill = Bookshelf.Model.extend({
  tableName: 'skills',
  hasTimeStamps: 'true',
  idAttribute: 'skill_id',
  skills: function() {
    return this.belongsToMany(Talent, 'talent_skills');
  }
});

module.exports = Skill;