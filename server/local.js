const path = require("path");
const cookieParser = require("cookie-parser");

const auth = require("./middlewares/auth");
const prefix = require("./middlewares/prefix");
const render_content = require("./middlewares/local_render");

/**
 * @description 开发的时候服务端渲染的逻辑可以在这里调试
 * @param {Express} app app对象是一个express示例,可以在这个实例上执行挂载中间件等操作
 * @param {Function} server_render 这是编译后的服务端渲染方法,对应public中的导出函数
 * **/
const html_template = (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Document</title>
    <link rel="shortcut icon" href="/public/favicon.ico">
    <script defer src="/main.js"></script>
    <link href="/main.css" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>
`);

module.exports = function server_callback(app) {
  app.use(cookieParser());
  app.use((request, response, next) => {
    console.log("url===>", request.url, "path==>", request.path, "pathname==>", request.pathname);
    if (request.url === "/") {
      return response.redirect(301, "/ad-poster/zh/");
    }
    next();
  });
  app.use([prefix, auth, render_content(html_template)], (request, response, next) => {
    const { path: request_path } = request;
    const extname = path.extname(request_path);
    if (extname) {
      return next();
    }
    if (request_path === "/__webpack_hmr") {
      return next();
    }
    if (request.prefix !== "ad-poster") {
      return response.redirect(301, "/ad-poster/zh/");
    }
    if (request.language !== "zh") {
      return response.redirect(301, "/ad-poster/zh/");
    }
    if (!request.auth) {
      if (request_path !== "/ad-poster/zh/login/") {
        return response.redirect(301, "/ad-poster/zh/login");
      }
    }
    response.send(request.render_content);
  });
};
