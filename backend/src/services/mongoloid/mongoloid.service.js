// Initializes the `mongoloid` service on path `/mongoloid`
const createService = require('feathers-mongodb');
const hooks = require('./mongoloid.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/mongoloid', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mongoloid');

  mongoClient.then(db => {
    service.Model = db.collection('mongoloid');
  });

  service.hooks(hooks);
};
