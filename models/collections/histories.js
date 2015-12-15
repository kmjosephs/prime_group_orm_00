/**
 * Histories Collection
 */
var History = require('../history');
var Bookshelf = require('../db/bookshelf');

var Histories = Bookshelf.Collection.extend({
  model: History
});

module.exports = Histories;