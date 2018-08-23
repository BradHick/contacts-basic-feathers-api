// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars


/**
|--------------------------------------------------
| Basicamente o que esse hook irá fazer é adicionar um sobrenome caso não tenha sido informado.
|--------------------------------------------------
*/

module.exports = function (options = {}) {
  return async context => {
    
    //pegando apenas os dados do context
    const { data } = context;

    //verificando se nos dados informados o cliente está com o sobrenome preenchido
    if(!data.name.last){
      //caso ele não tenha sobrenome, iremos dizer que ele é um Stark ;)
      data.name.last = 'Stark';
    }

    //Importante, um Hook SEMPRE retorna o context
    return context;
  };
};
