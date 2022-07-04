/* eslint-disable react/prop-types */
import { Descriptions } from "antd";
import { ProCard } from "@ant-design/pro-components";
import React, { useEffect } from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

import useAuthInfo from "@/hooks/useAuthInfo";

// import css from "./style.scss";
// import css from "./style.less";

export default function UserCenter(props) {

  const auth_info = useAuthInfo();

  console.log(auth_info);

  return (
    <ProCard>
      <Descriptions title="用户信息" column={2} bordered>
        <Descriptions.Item label="用ID">{auth_info.user_id}</Descriptions.Item>
        <Descriptions.Item label="用户名">{auth_info.username}</Descriptions.Item>
        <Descriptions.Item label="注册时间">{auth_info.create_time}</Descriptions.Item>
        <Descriptions.Item label="关联邮箱">{auth_info.e_mail}</Descriptions.Item>
        <Descriptions.Item label="角色类型">{auth_info.role}</Descriptions.Item>
      </Descriptions>
    </ProCard>
  )
};


UserCenter.propTypes = {


};
UserCenter.defaultProps = {


};