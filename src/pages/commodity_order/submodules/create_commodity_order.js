/* eslint-disable react/prop-types */
import React from "react";
import { Form, Button } from "antd";
import { PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

import CommodityForm from "../forms/commodity_form";

export default function CreateCommodityOrder(props) {
  const [form] = Form.useForm();

  return (
    <PageContainer
      content="投放广告"
      footer={[
        (<span key="1">10 (USDT)</span>),
        (<Button key="2" type="default">重新填写</Button>),
        (<Button key="3" type="default">创建订单(稍后支付)</Button>),
        (<Button key="4" type="primary">立即支付</Button>)
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