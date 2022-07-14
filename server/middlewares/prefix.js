const { match } = require("path-to-regexp");
const match_function = match("/:prefix?/:language?/:pathname1?/:pathname2?");

module.exports = async (request, response, next) => {
  const { path: request_path } = request;
  const { params } = match_function(request_path);
  request.prefix = params ? params.prefix : null;
  request.language = params ? params.language : null;
  next();
}