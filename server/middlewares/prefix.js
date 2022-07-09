const { match } = require("path-to-regexp");
const match_function = match("/:prefix?/:language?/:pathname?");

module.exports = async (request, response, next) => {
  const { path: request_path } = request;
  const { params } = match_function(request_path);
  console.log("params", params, "request_path", request_path);
  request.prefix = params.prefix;
  request.language = params.language;
  next();
}