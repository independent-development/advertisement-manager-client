/* eslint-disable react/prop-types */
import { Space, Button } from "antd";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function OperationColumn(props) {
  const { order_id } = props;

  const navigate = useNavigate();

  const handleNavigate = useCallback(async () => {
    await navigate(`/payment_page?order_id=${order_id}`);
  }, [order_id, navigate]);

  return (
    <Space>
      <Button type="primary" onClick={handleNavigate}>支付</Button>
      <Button danger type="primary">取消</Button>
    </Space>
  )
};


OperationColumn.propTypes = {


};
OperationColumn.defaultProps = {


};