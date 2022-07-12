/* eslint-disable react/prop-types */
import moment from "moment";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Space, Table, Button, Tooltip } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import OperationColumn from "./components/OperationColumn";

export default function OrderList(props) {
  const { dataSource, onDelete } = props;

  const navigate = useNavigate();

  const columns = useMemo(() => ([{
    title: "编号",
    align: "center",
    dataIndex: "order_id",
    render(value) {
      return (
        <Tooltip title={value} style={{ whiteSpace: "nowrap" }}>
          <span>{`${value.substring(0, 8)}...`}</span>
        </Tooltip>
      );
    }
  }, {
    title: "交易状态",
    align: "center",
    render({ relation_transaction }) {
      if (!relation_transaction) {
        return "未创建支付";
      }
      return relation_transaction.transaction_status;
    }
  }, {
    title: "订单状态",
    align: "center",
    dataIndex: "order_status"
  }, {
    title: "创建时间",
    align: "center",
    dataIndex: "create_time",
    render(value) {
      return moment(value).format("YYYY年MM月DD日 HH时mm分ss秒")
    }
  }, {
    title: "详细操作",
    align: "center",
    render(value) {
      return (<OperationColumn {...value} />)
    }
  }]), []);

  return (
    <Table rowKey="order_id" columns={columns} dataSource={dataSource} />
  )
};


OrderList.propTypes = {


};
OrderList.defaultProps = {
  dataSource: [],
  onDelete() { }
};