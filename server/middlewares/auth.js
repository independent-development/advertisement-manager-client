

module.exports = async (request, response, next) => {
  const { API_TOKEN } = request.cookies;
  if (!API_TOKEN) {
    request.auth = false;
    if (request.path !== "/ad-poster/zh/login") {
      return response.redirect(301, "/ad-poster/zh/login");
    }
    next();
  } else {
    request.auth = true;
    next();
  }
};