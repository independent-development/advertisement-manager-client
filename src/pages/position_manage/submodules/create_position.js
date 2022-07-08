/* eslint-disable react/prop-types */
import { Form, Button } from "antd";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import CreatePositionForm from "../forms/create_position_form";
import create_position from "../services/create_position";

export default function CreatePosition(props) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  /** 保存订单稍后支付 **/
  const handleSaveOrder = useCallback(async () => {
    const position_info = await form.validateFields();
    await create_position(position_info);
    await navigate("/order_record");
  }, [form, navigate]);

  const handleCreateAndPay = useCallback(async () => {
    // const commodity_info = await form.validateFields();
  }, [form]);

  return (
    <PageContainer
      content="投放广告"
      footer={[
        (<span key="1">10 (USDT)</span>),
        (<Button key="2" type="primary">预览效果</Button>),
        (<Button key="3" type="default" onClick={handleSaveOrder}>保存订单(稍后支付)</Button>),
        (<Button key="4" type="primary">立即支付</Button>),
      ]}
    >
      <CreatePositionForm form={form} />
    </PageContainer >
  )
};


CreatePosition.propTypes = {


};
CreatePosition.defaultProps = {


};