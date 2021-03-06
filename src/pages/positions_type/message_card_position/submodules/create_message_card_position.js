/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import React, { useCallback } from "react";
import { message, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import useMessageCardAmount from "../hooks/useMessageCardAmount";
import CreatePositionForm from "../forms/create_position_form";
import create_position from "../services/create_position";

export default function CreateMessageCardPosition(props) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [amount, get_amount] = useMessageCardAmount();

  /** 保存订单稍后支付 **/
  const handleSaveOrder = useCallback(async () => {
    const message_key = uuidv4();
    try {
      const position_info = await form.validateFields();
      message.loading({ key: message_key, content: "正在提交,请稍后... ...", duration: 0 });
      await create_position(position_info);
      await navigate("/position/message_card_position_record");
      message.success({ key: message_key, content: "提交成功!" });
    } catch (error) {
      message.error({ key: message_key, content: error.message });
    }
  }, [form, navigate]);

  const handleCreateAndPay = useCallback(async () => {
    const message_key = uuidv4();
    try {
      const position_info = await form.validateFields();
      message.loading({ key: message_key, content: "正在提交,请稍后... ...", duration: 0 });
      const { order_id, position_id } = await create_position(position_info);
      await navigate(`/payment_page?order_id=${order_id}`);
      message.success({ key: message_key, content: "提交成功!" });
    } catch (error) {
      message.error({ key: message_key, content: error.message });
    }
  }, [form, navigate]);

  return (
    <PageContainer
      content="投放信息卡片广告"
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


CreateMessageCardPosition.propTypes = {


};
CreateMessageCardPosition.defaultProps = {


};