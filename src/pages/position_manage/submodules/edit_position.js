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
import get_position_detail from "../services/get_position_detail";

export default function EditPosition(props) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [search_params] = useSearchParams();

  const [initial_values, set_initial_values] = useState(false);

  useEffect(() => {
    const position_id = search_params.get("position_id");
    (async () => {
      const detail = await get_position_detail(position_id);
      await set_initial_values(false);
      await set_initial_values(detail);
    })();
  }, [search_params]);


  const handleCreateCommodity = useCallback(async () => {
    const commodity_info = await form.validateFields();
    await create_commodity(commodity_info);
    await navigate("/commodity_record");
  }, [form, navigate]);

  const handleCreateAndPay = useCallback(async () => {
    // const commodity_info = await form.validateFields();
  }, [form]);

  return (
    <PageContainer
      content="编辑广告"
      footer={initial_values ? [
        (<span key="1">10 (USDT)</span>),
        (<Button key="2" type="primary">预览效果</Button>),
        (<Button key="3" type="default" onClick={handleCreateCommodity}>保存订单(稍后支付)</Button>),
      ] : null}
    >
      <EditPositionForm form={form} initialValues={initial_values} />
    </PageContainer >
  )
};


EditPosition.propTypes = {


};
EditPosition.defaultProps = {


};