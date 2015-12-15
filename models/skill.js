/**
 * Skill model
 */
var Bookshelf = require('./db/bookshelf');
var Talent = require('./talent');

var Skill = Bookshelf.Model.extend({
  tableName: 'skills',
  hasTimeStamps: 'true',
  skills: function() {
    return this.belongsToMany(Talent, 'talent_skills');
  }
});

module.exports = Skill;