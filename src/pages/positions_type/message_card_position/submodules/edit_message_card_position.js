/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { Form, Button, message } from "antd";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PageContainer } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import EditPositionForm from "../forms/edit_position_form";
import modify_position from "../services/modify_position";
import get_position_detail from "../services/get_position_detail";
import useMessageCardAmount from "../hooks/useMessageCardAmount";

export default function EditMessageCardPosition(props) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [search_params] = useSearchParams();

  const [amount, get_amount] = useMessageCardAmount();

  const [initial_values, set_initial_values] = useState(false);

  useEffect(() => {
    (async () => {
      const position_id = search_params.get("position_id");
      const detail = await get_position_detail(position_id);
      await set_initial_values(false);
      await set_initial_values(detail);
    })();
  }, [search_params]);

  /** 保存订单稍后支付 **/
  const handleSaveModify = useCallback(async () => {
    const message_key = uuidv4();
    try {
      const position_info = await form.validateFields();
      message.loading({ key: message_key, content: "正在提交,请稍后... ...", duration: 0 });
      const position_id = search_params.get("position_id");
      await modify_position(position_id, position_info);
      await navigate("/position/message_card_position_record");
      message.success({ key: message_key, content: "提交成功!" });
    } catch (error) {
      message.error({ key: message_key, content: error.message });
    }
  }, [form, navigate, search_params]);

  const handleCreateAndPay = useCallback(async () => {
    // const commodity_info = await form.validateFields();
  }, [form]);

  return (
    <PageContainer
      content={`编辑信息卡片广告-${search_params.get("position_id")}`}
      footer={initial_values ? [
        (<span key="1">{amount} (USDT)</span>),
        (<Button key="2" type="primary">预览效果</Button>),
        (<Button key="3" type="default" onClick={handleSaveModify}>保存改动(稍后支付)</Button>),
        (<Button key="4" type="primary">立即支付</Button>),
      ] : null}
    >
      <EditPositionForm form={form} initialValues={initial_values} onValuesChange={get_amount} />
    </PageContainer >
  )
};


EditMessageCardPosition.propTypes = {


};
EditMessageCardPosition.defaultProps = {


};