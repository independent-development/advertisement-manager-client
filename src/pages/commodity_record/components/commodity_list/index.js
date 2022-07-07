/* eslint-disable react/prop-types */
import moment from "moment";
import React, { useMemo, useCallback } from "react";
import { Space, Table, Button, Tooltip } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import delete_commodity from "../../services/delete_commodity";

// import css from "./style.scss";
// import css from "./style.less";

export default function CommodityList(props) {
  const { dataSource, onDelete } = props;

  const handleDelete = useCallback(async (commodity_id) => {
    await delete_commodity(commodity_id);
    await onDelete();
  }, [onDelete]);

  const columns = useMemo(() => ([{
    title: "编号",
    align: "center",
    dataIndex: "commodity_id",
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
      return relation_transaction.transaction_status;
    }
  }, {
    title: "投放状态",
    align: "center",
    dataIndex: "status"
  }, {
    title: "投放页面",
    align: "center",
    dataIndex: "subject_detail_page"
  }, {
    title: "投放位置",
    align: "center",
    dataIndex: "position_value"
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
    render({ relation_transaction }) {
      if (relation_transaction.transaction_status === "CREATED") {
        return (
          <Space>
            <Button type="default">编辑</Button>
            <Button type="primary">支付</Button>
            <Button danger type="primary">取消</Button>
          </Space>
        )
      }
      if (relation_transaction.transaction_status === "COMPLATE") {
        return (
          <Space>
            <Button type="default">查看</Button>
            <Button type="primary">再次投放</Button>
          </Space>
        )
      }
      if (relation_transaction.transaction_status === "FAILD") {
        return (
          <Space>
            <Button type="primary">重新投放</Button>
          </Space>
        )
      }
      return false;
    }
  }]), [handleDelete]);

  return (
    <Table rowKey="commodity_id" columns={columns} dataSource={dataSource} />
  )
};


CommodityList.propTypes = {


};
CommodityList.defaultProps = {
  dataSource: [],
  onDelete() { }
};