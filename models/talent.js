/**
 * Talent model
 */
var Bookshelf = require('./db/bookshelf');
var Skill = require('./skill');
var WageRequirement = require('./wage_requirement');
var History = require('./history.js');

var Talent = Bookshelf.Model.extend({
  tableName: 'talent',
  hasTimeStamps: 'true',
  idAttribute: 'talent_id',
  skills: function() {
    return this.belongsToMany(Skill, 'talent_skills');
  },
  wageRequirements: function() {
    return this.hasMany(WageRequirement, 'talent_id');
  },
  histories: function() {
    return this.hasMany(History, 'talent_id');
  }
});

module.exports = Talent;