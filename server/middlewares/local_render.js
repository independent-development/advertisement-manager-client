const path = require("path");
const child_process = require("child_process");
const server_file_path = path.join(process.cwd(), "./assets/server.js");


module.exports = (html_template) => async (request, response, next) => {
  const { path: request_path } = request;
  const render_content = await new Promise((resolve) => {
    const sub_node = child_process.fork(server_file_path);
    sub_node.send({ html_template, location: request_path, language: request.language });
    sub_node.on("message", resolve);
  });
  request.render_content = render_content;
  next();
};