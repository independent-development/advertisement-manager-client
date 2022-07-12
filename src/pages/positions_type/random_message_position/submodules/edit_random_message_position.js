/* eslint-disable react/prop-types */
import { Form, Button } from "antd";
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
import useRandomMessageAmount from "../hooks/useRandomMessageAmount";

export default function EditRandomMessagePosition(props) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [search_params] = useSearchParams();

  const [amount, get_amount] = useRandomMessageAmount();

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
    const position_info = await form.validateFields();
    const position_id = search_params.get("position_id");
    await modify_position(position_id, position_info);
    await navigate("/position/random_message_position_record");
  }, [form, navigate, search_params]);

  const handleCreateAndPay = useCallback(async () => {
    // const commodity_info = await form.validateFields();
  }, [form]);

  return (
    <PageContainer
      content={`编辑随机信息流广告-${search_params.get("position_id")}`}
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


EditRandomMessagePosition.propTypes = {


};
EditRandomMessagePosition.defaultProps = {


};