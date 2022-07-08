const path = require("path");
const child_process = require("child_process");
const server_file_path = path.join(process.cwd(), "./assets/server.js");



module.exports = (html_template) => async (request, response, next) => {
  const { path: request_path } = request;
  const render_content = await new Promise((resolve) => {
    const sub_node = child_process.fork(server_file_path);
    sub_node.send({
      html_template,
      location: request_path,
      language: request.language,
      dev_inject: {
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
        position_initial_values: {
          subject_detail_page: ["homepage"],
          calculate_type: "DAY",
          calculate_value: 1,
          position_value: "PAGE_TOP",
          content_type: "IMAGE",
          resource_type: "OSS_URL",
          resource_link: "https://ewr1.vultrobjects.com/test-bucket-002/4ba4e20401b8bdc4845ea6ecfa02e8ba.jpeg"
        }
      }
    });
    sub_node.on("message", resolve);
  });
  request.render_content = render_content;
  next();
};