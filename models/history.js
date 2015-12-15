/**
 * History model
 */
var Bookshelf = require('./db/bookshelf');
var Talent = require('./talent');


var History = Bookshelf.Model.extend({
  tableName: 'history',
  hasTimeStamps: 'true',
  talent: function() {
    return this.belongsTo(Talent, 'talent_id');
  }
});

module.exports = History;