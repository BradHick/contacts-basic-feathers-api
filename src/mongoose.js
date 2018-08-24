const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.connect(process.env.MONGOLAB_URI || app.get('mongodb'), {});
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
