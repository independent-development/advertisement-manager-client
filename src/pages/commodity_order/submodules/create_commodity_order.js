/* eslint-disable react/prop-types */
import { Form, Button } from "antd";
import React, { useCallback } from "react";
import { PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

import CommodityForm from "../forms/commodity_form";

import test_hello from "../services/test_hello";
import create_commodity from "../services/create_commodity";

export default function CreateCommodityOrder(props) {
  const [form] = Form.useForm();

  const handleCreateCommodity = useCallback(async () => {
    const commodity_info = await form.validateFields();
    await create_commodity(commodity_info);
  }, [form]);

  const handleCreateAndPay = useCallback(async () => {
    // const commodity_info = await form.validateFields();
    await test_hello();
  }, [form]);

  return (
    <PageContainer
      content="投放广告"
      footer={[
        (<span key="1">10 (USDT)</span>),
        (<Button key="2" type="default">重新填写</Button>),
        (<Button key="3" type="default" onClick={handleCreateCommodity}>创建订单(稍后支付)</Button>),
        (<Button key="4" type="primary" onClick={handleCreateAndPay}>立即支付</Button>)
      ]}
    >
      <CommodityForm form={form} />
    </PageContainer >
  )
};


CreateCommodityOrder.propTypes = {


};
CreateCommodityOrder.defaultProps = {


};