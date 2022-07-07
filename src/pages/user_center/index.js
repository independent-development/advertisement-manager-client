/* eslint-disable react/prop-types */
import { Descriptions } from "antd";
import React, { useEffect } from "react";
import { ProCard, PageContainer } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

import useAuthInfo from "@/hooks/useAuthInfo";

// import css from "./style.scss";
// import css from "./style.less";

export default function UserCenter(props) {

  const auth_info = useAuthInfo();

  return (
    <PageContainer content="用户中心">
      <ProCard ghost direction="column" gutter={[16, 16]}>
        <ProCard>
          <Descriptions title="基本信息" column={2} bordered>
            <Descriptions.Item label="用户名">{auth_info.username}</Descriptions.Item>
            <Descriptions.Item label="性别">{auth_info.sex}</Descriptions.Item>
            <Descriptions.Item label="生日">{auth_info.birth || "无"}</Descriptions.Item>
          </Descriptions>
        </ProCard>
        <ProCard>
          <Descriptions title="详细信息" column={2} bordered>
            <Descriptions.Item label="用ID">{auth_info.user_id}</Descriptions.Item>
            <Descriptions.Item label="注册时间">{auth_info.create_time}</Descriptions.Item>
            <Descriptions.Item label="关联邮箱">{auth_info.e_mail}</Descriptions.Item>
            <Descriptions.Item label="角色类型">{auth_info.role}</Descriptions.Item>
          </Descriptions>
        </ProCard>
      </ProCard>
    </PageContainer>
  )
};


UserCenter.propTypes = {


};
UserCenter.defaultProps = {


};