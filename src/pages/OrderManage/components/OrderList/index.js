/* eslint-disable react/prop-types */
import React from "react";
import { Space, Table, Button } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

const columns = [{
  title: "订单编号",
  align: "center",
  dataIndex: "order_id"
}, {
  title: "广告编号",
  align: "center",
  dataIndex: "fk_commodity_id",
}, {
  title: "交易HASH",
  align: "center",
  dataIndex: "fk_transaction_id"
}, {
  title: "创建时间",
  align: "center",
  dataIndex: "create_time"
}, {
  title: "订单状态",
  align: "center",
  dataIndex: "status"
}, {
  title: "详细操作",
  align: "center",
  render() {
    return (
      <Space>
        <Button type="primary">取消订单</Button>
        <Button danger type="default">删除订单</Button>
      </Space>
    )
  }
}];

export default function OrderList(props) {
  const { dataSource } = props;
  return (
    <Table rowKey="id" columns={columns} dataSource={dataSource} />
  )
};


OrderList.propTypes = {


};
OrderList.defaultProps = {
  dataSource: []
};