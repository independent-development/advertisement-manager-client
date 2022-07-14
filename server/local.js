const cookieParser = require("cookie-parser");

const auth = require("./middlewares/auth");
const prefix = require("./middlewares/prefix");
const render_with_process = require("./utils/render_with_process");

const dev_inject = {
  /** 登录页初始值 **/
  login_initial_values: {
    username: "test_user001",
    password: "123456"
  },
  /** 注册页初始值 **/
  registry_initial_values: {
    username: "test_user001",
    password: "123456",
    e_mail: "1542874601@qq.com"
  },
  /** 广告位表单初始值 **/
  random_message_position_initial_values: {
    calculate_type: "NUMBER",
    calculate_value: 1000,
    length_width_ratio: "W1H1",
    resource_link: "https://ewr1.vultrobjects.com/test-bucket-002/4ba4e20401b8bdc4845ea6ecfa02e8ba.jpeg"
  }
};

module.exports = function server_callback(app) {
  app.use(cookieParser());
  app.use([auth, prefix], async (request, response) => {
    if (request.prefix !== "ad-poster") {
      return response.redirect(301, "/ad-poster/zh/");
    }
    if (request.language !== "zh") {
      return response.redirect(301, "/ad-poster/zh/");
    }
    const { devMiddleware } = response.locals.webpack;
    const jsonWebpackStats = devMiddleware.stats.toJson();
    const render_html = await render_with_process({
      dev_inject,
      location: request.path,
      language: request.language,
      html_template: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Document</title>
          <link rel="shortcut icon" href="/public/favicon.ico">
          <script defer src="${jsonWebpackStats.publicPath}main.js"></script>
          <link href="${jsonWebpackStats.publicPath}main.css" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
        </body>
        </html>
    `});
    response.send(render_html);
  });
};
