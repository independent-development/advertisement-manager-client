/* eslint-disable react/prop-types */
import { Space, Button, message } from "antd";
import React, { useRef, useCallback } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { ProForm, ProFormText, ProFormSelect, ProFormDatePicker } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";
import post_request from "@/utils/request/post_request";
import form_config from "../configs/form_config";

export default function RegistryForm(props) {

  const formRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    try {
      const result = await formRef.current.validateFields();
      await post_request({
        url: "/user/registry",
        data: result
      });
      message.success("注册成功!");
    } catch (error) {
      message.error(error.message);
    }
  }, [formRef, navigate]);

  const renderCallback = useCallback(() => {
    return (
      <Space size={20} style={{ width: "100%" }} direction="vertical">
        <Button size="large" block type="primary" onClick={handleSubmit}>提交</Button>
        <Button size="large" block type="default">重置</Button>
        <div style={{ textAlign: "center" }}>
          <NavLink to="/login">已有账号,返回登录</NavLink>
        </div>
      </Space>
    )
  }, []);

  return (
    <ProForm {...form_config} formRef={formRef} submitter={{ render: renderCallback }}>
      <ProFormText
        label="用户名"
        name="username"
        placeholder="请输入用户名"
        rules={[{ required: true, message: "请输入用户名" }]}
        allowClear
      />
      <ProFormText.Password
        label="密码"
        name="password"
        placeholder="请输入密码"
        rules={[{ required: true, message: "请输入密码" }]}
        allowClear
      />
      <ProFormText
        label="邮箱"
        name="e_mail"
        placeholder="请输入邮箱"
        rules={[{ required: true, message: "请输入邮箱" }]}
        allowClear
      />
      <ProFormSelect
        label="性别"
        name="sex"
        valueEnum={{ man: "男性", woman: "女性" }}
      />
      <ProFormDatePicker
        name="birth"
        label="出生日期"
        fieldProps={{ style: { width: "100%" } }}
      />
      <ProFormText
        label="手机号"
        name="mobile_phone"
        placeholder="请输入手机号"
        allowClear
      />
    </ProForm>
  )
};


RegistryForm.propTypes = {


};
RegistryForm.defaultProps = {


};