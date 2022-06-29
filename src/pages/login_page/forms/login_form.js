/* eslint-disable react/prop-types */
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import React, { useRef, useState, useCallback } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";
import form_config from "../configs/form_config";

export default function UserLoginForm(props) {
  const formRef = useRef();
  const [loginType, setLoginType] = useState("phone");
  console.log(formRef);

  const handleSubmit = useCallback(async () => {
    const result = await formRef.current.validateFields();
    console.log("result", result);
  }, [formRef]);

  return (
    <LoginForm {...form_config} formRef={formRef} onClick={handleSubmit}>
      <Tabs activeKey={loginType} onChange={setLoginType}>
        <Tabs.TabPane key="account" tab="账号密码登录" />
        <Tabs.TabPane key="phone" tab="手机号登录" />
      </Tabs>
      <ProFormText
        name="username"
        placeholder="请输入用户名"
        fieldProps={{ size: "large", prefix: (<UserOutlined />) }}
      />
      <ProFormText.Password
        name="password"
        placeholder="请输入密码"
        fieldProps={{ size: "large", prefix: (<LockOutlined />) }}
      />
      <div style={{ paddingBottom: 40 }}>
        <NavLink to="/registry" style={{ float: "left" }}>
          注册用户
        </NavLink>
        <a style={{ float: "right" }}>
          忘记密码
        </a>
        <a style={{ clear: "both" }} />
      </div>
    </LoginForm>
  )
};


UserLoginForm.propTypes = {


};
UserLoginForm.defaultProps = {


};