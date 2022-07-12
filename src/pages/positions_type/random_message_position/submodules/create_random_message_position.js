/* eslint-disable react/prop-types */
import { Form, Button } from "antd";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import useRandomMessageAmount from "../hooks/useRandomMessageAmount";
import CreatePositionForm from "../forms/create_position_form";
import create_position from "../services/create_position";

export default function CreateRandomMessagePosition(props) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [amount, get_amount] = useRandomMessageAmount();

  /** 保存订单稍后支付 **/
  const handleSaveOrder = useCallback(async () => {
    const position_info = await form.validateFields();
    await create_position(position_info);
    await navigate("/position/random_message_position_record");
  }, [form, navigate]);

  const handleCreateAndPay = useCallback(async () => {
    const position_info = await form.validateFields();
    const { order_id, position_id } = await create_position(position_info);
    await navigate(`/payment_page?order_id=${order_id}`);
  }, [form, navigate]);

  return (
    <PageContainer
      content="投放随机信息流广告"
      footer={[
        (<span key="1">{amount} (USDT)</span>),
        (<Button key="2" type="primary">预览效果</Button>),
        (<Button key="3" type="default" onClick={handleSaveOrder}>保存配置(稍后支付)</Button>),
        (<Button key="4" type="primary" onClick={handleCreateAndPay}>立即支付</Button>),
      ]}
    >
      <CreatePositionForm form={form} onValuesChange={get_amount} />
    </PageContainer >
  )
};


CreateRandomMessagePosition.propTypes = {


};
CreateRandomMessagePosition.defaultProps = {


};