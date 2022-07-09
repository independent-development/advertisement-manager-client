const { server_render } = require("../../assets/server.js");


module.exports = (html_template) => async (request, response, next) => {
  const { path: request_path } = request;
  request.render_content = server_render({ html_template, location: request_path, language: request.language });
  next();
};