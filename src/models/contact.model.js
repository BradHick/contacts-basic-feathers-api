// contact-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contact = new Schema({
    //o nome será feito de forma aninhada.
    name: { 
      first: { 
        type: String,
        required: [true, 'First name is required']
      },
      last: {
        type: String,
        required: false
      }
    },
    email: {
      type: String,
      required: [true, 'Email is required']
    },
    phone:{
      type: String,
      required: [true, 'Phone number is required']
    }
  }, 
  {
    //com essa propriedade,os atributos que informam a data de criação e alteração
    //são criados automaticamnete 
    timestamps: true
  });

  return mongooseClient.model('contact', contact);
};
