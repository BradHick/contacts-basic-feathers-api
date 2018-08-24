const mongoose = require('mongoose');

module.exports = function (app) {
  if(process.env.MONGOLAB_URI){
    mongoose.connect(process.env.MONGOLAB_URI, {});
  }else{
    mongoose.connect(app.get('mongodb'), {});
  }
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
