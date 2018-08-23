

const processName = require('../../hooks/process-name');

//hook Criada está aqui

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processName()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
