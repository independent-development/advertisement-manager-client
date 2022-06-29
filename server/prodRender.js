/* eslint-disable import/no-dynamic-require */
const path = require("path");
const { match } = require("path-to-regexp");

const match_function = match("/:language/:pathname?");
const { server_render } = require("../assets/server.js");

/** 正式环境服务端渲染 **/
module.exports = (html_template) => {
  return async function (request, response, next) {
    const { path: request_path } = request;
    const extname = path.extname(request_path);
    if (extname) {
      return next();
    }
    if (request_path === "/__webpack_hmr") {
      return next();
    }
    const { params } = match_function(request_path);
    if (!params) {
      return response.redirect(301, "/zh");
    }
    if (!["zh", "en"].includes(params.language)) {
      return response.redirect(301, "/zh");
    }
    const render_content = server_render({
      html_template,
      location: request_path,
      language: params.language
    });
    const { API_TOKEN } = request.cookies;
    if (!API_TOKEN) {
      if (request_path === "/zh/login") {
        return response.send(render_content);
      }
      if (request_path === "/zh/forget") {
        return response.send(render_content);
      }
      if (request_path === "/zh/registry") {
        return response.send(render_content);
      }
      return response.redirect(301, "/zh/login");
    }
    return response.send(render_content);
  }
}