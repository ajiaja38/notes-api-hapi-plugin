/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const UsersHandler = require("./handler");
const routes = require("./routes");

/* eslint-disable linebreak-style */
module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const userHandler = new UsersHandler(service, validator);
    server.route(routes(userHandler));
  },
};
