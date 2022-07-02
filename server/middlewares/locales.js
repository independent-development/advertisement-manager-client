const { match } = require("path-to-regexp");
const match_function = match("/:language/:pathname?");

module.exports = async (request, response, next) => {
  const { path: request_path } = request;
  const { params } = match_function(request_path);
  request.language = params.language;
  next();
}