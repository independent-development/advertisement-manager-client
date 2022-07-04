/* eslint-disable react/prop-types */
import { Space, Table, Button } from "antd";
import React, { useMemo, useCallback } from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

import delete_orders from "../../services/delete_orders";

// import css from "./style.scss";
// import css from "./style.less";


export default function OrderList(props) {
  const { dataSource, onDelete } = props;

  const handleDelete = useCallback(async (order_id) => {
    await delete_orders(order_id);
    await onDelete();
  }, [onDelete]);

  const columns = useMemo(() => ([{
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
    render({ order_id }) {
      return (
        <Space>
          <Button type="primary">取消订单</Button>
          <Button danger type="default" onClick={() => handleDelete(order_id)}>删除订单</Button>
        </Space>
      )
    }
  }]), [handleDelete]);

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