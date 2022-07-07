/* eslint-disable react/prop-types */
import moment from "moment";
import React, { useMemo, useCallback } from "react";
import { Space, Table, Button, Tooltip } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";


// import css from "./style.scss";
// import css from "./style.less";

export default function TransactionList(props) {
  const { dataSource, onDelete } = props;

  const columns = useMemo(() => ([{
    title: "交易编号",
    align: "center",
    dataIndex: "transaction_id",
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
    dataIndex: "transaction_status"
  }, {
    title: "交易哈希",
    align: "center",
    dataIndex: "transaction_hash"
  }, {
    title: "交易金额",
    align: "center",
    dataIndex: "payment_amount"
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
    dataIndex: "transaction_status",
    render(value) {
      if (value === "CREATED") {
        return (
          <Space>
            <Button type="primary">立即支付</Button>
            <Button danger type="primary">取消支付</Button>
          </Space>
        )
      }
      if (value === "FAILD") {
        return (
          <Button type="primary">重新支付</Button>
        )
      }
      if (value === "COMPLATE") {
        return (
          <Button type="primary">查看详情</Button>
        )
      }
      return null;
    }
  }]), []);

  return (
    <Table rowKey="transaction_id" columns={columns} dataSource={dataSource} />
  )
};


TransactionList.propTypes = {


};
TransactionList.defaultProps = {
  dataSource: [],
  onDelete() { }
};