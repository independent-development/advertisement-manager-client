

module.exports = async (request, response, next) => {
  const { url: request_path } = request;
  const { API_TOKEN } = request.cookies;
  if (!API_TOKEN) {
    if (request_path === "/zh/login") {
      request.auth = true;
      return next();
    }
    if (request_path === "/zh/forget") {
      request.auth = true;
      return next();
    }
    if (request_path === "/zh/registry") {
      request.auth = true;
      return next();
    }
    request.auth = false;
    return next();
  }
  request.auth = true;
  next();
};