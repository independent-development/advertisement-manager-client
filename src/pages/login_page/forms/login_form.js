/* eslint-disable react/prop-types */
import { Space, Button } from "antd";
import { getProperty } from "dot-prop";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useRef, useState, useCallback } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";
import post_request from "@/utils/request/post_request";
import form_config from "../configs/form_config";

export default function UserLoginForm(props) {

  const { initialValues, ...otherProps } = props;

  const formRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    const user_login_info = await formRef.current.validateFields();
    const login_result = await post_request({
      url: "/user/login",
      data: user_login_info
    });
    await navigate("/");
  }, [formRef, navigate]);

  const renderCallback = useCallback(() => {
    return (
      <Space size={20} style={{ width: "100%" }} direction="vertical">
        <Button size="large" block type="primary" onClick={handleSubmit}>登录</Button>
        <Button size="large" block type="default">重置</Button>
      </Space>
    )
  }, []);

  return (
    <LoginForm {...form_config} initialValues={initialValues} formRef={formRef} submitter={{ render: renderCallback }}>
      <ProFormText
        name="username"
        placeholder="请输入用户名"
        rules={[{ required: true, message: "请输入用户名" }]}
        fieldProps={{ size: "large", prefix: (<UserOutlined />) }}
      />
      <ProFormText.Password
        name="password"
        placeholder="请输入密码"
        rules={[{ required: true, message: "请输入密码" }]}
        fieldProps={{ size: "large", prefix: (<LockOutlined />) }}
      />
      <div style={{ paddingBottom: 40 }}>
        <NavLink to="/registry" style={{ float: "left" }}>
          注册用户
        </NavLink>
        <NavLink to="/forget" style={{ float: "right" }}>
          忘记密码
        </NavLink>
        <a style={{ clear: "both" }} />
      </div>
    </LoginForm>
  )
};


UserLoginForm.propTypes = {


};
UserLoginForm.defaultProps = {
  initialValues: getProperty(window, "dev_inject.login_initial_values")
};