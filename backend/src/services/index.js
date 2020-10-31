const todos = require('./todos/todos.service.js');
const mongoloid = require('./mongoloid/mongoloid.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(todos);
  app.configure(mongoloid);
};
