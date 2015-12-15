/**
 * Wage Requirements Collection
 */
var WageRequirement = require('../wage_requirement');
var Bookshelf = require('../db/bookshelf');

var WageRequirements = Bookshelf.Collection.extend({
  model: WageRequirement
});

module.exports = WageRequirements;