/**
 * Talents Collection
 */
var Talent = require('../talent');
var Bookshelf = require('../db/bookshelf');

var Talents = Bookshelf.Collection.extend({
  model: Talent
});

module.exports = Talents;