/* eslint-disable import/no-extraneous-dependencies */
const fs = require("fs");
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const { promisify } = require("util");

const auth = require("./middlewares/auth");
const locales = require("./middlewares/locales");
const render_content = require("./middlewares/test_render");

const app = express();

(async () => {
  const html_template_path = path.resolve(__dirname, "../assets/index.html");
  const html_template = await promisify(fs.readFile)(html_template_path, "utf-8");
  app.use(cookieParser());
  app.use([auth, locales, render_content(html_template)], (request, response, next) => {
    const { path: request_path } = request;
    const extname = path.extname(request_path);
    if (extname) {
      return next();
    }
    if (request_path === "/__webpack_hmr") {
      return next();
    }
    if (!request.auth) {
      return response.redirect(301, "/zh/login");
    }
    if (!request.language) {
      return response.redirect(301, "/zh");
    }
    response.send(request.render_content);
  });
  app.use(express.static(path.resolve(__dirname, "../assets/")));
  app.listen(8090, () => console.log("server is runing 8090"));
})();

