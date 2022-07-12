/* eslint-disable react/prop-types */
import moment from "moment";
import { getProperty } from "dot-prop";
import { useSearchParams } from "react-router-dom";
import { Button, Statistic, Descriptions } from "antd";
import { ProCard, PageContainer } from "@ant-design/pro-components";
import React, { useMemo, useState, useEffect, useCallback } from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import useOrderDetail from "./hooks/useOrderDetail";
import useCheckTronLink from "./hooks/useCheckTronLink";
import useActivatePayment from "./hooks/useActivatePayment";
import TopMessage from "./components/TopMessage";

import USDT_ICON from "./assets/USDT.png";

export default function PaymentPage(props) {
  const [search_params] = useSearchParams();

  const [order_detail, hendleOrderDetail] = useOrderDetail();
  const [check_wallet_status, check_status_message] = useCheckTronLink();
  const [activate_status, handlePayment] = useActivatePayment(check_wallet_status);

  const button_disabled_status = useMemo(() => (check_wallet_status !== "READY" || activate_status !== "ACTIVED"), [check_wallet_status, activate_status]);

  useEffect(() => {
    const order_id = search_params.get("order_id");
    hendleOrderDetail(order_id);
  }, [search_params]);

  return (
    <PageContainer
      content={(
        <TopMessage
          check_wallet_status={check_wallet_status}
          check_status_message={check_status_message}
          activate_status={activate_status}
        />
      )}
    >
      <ProCard ghost direction="column" gutter={[16, 16]}>
        <ProCard>
          <Descriptions title="订单信息">
            <Descriptions.Item label="订单编号">{order_detail.order_id}</Descriptions.Item>
            <Descriptions.Item label="订单状态">{order_detail.order_status}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{moment(order_detail.create_time).format("YYYY-MM-DD HH:mm:ss")}</Descriptions.Item>
          </Descriptions>
        </ProCard>
        <ProCard>
          <Statistic
            precision={2}
            title="支付金额(USDT)"
            prefix={(<img style={{ marginTop: -5 }} width={25} src={USDT_ICON} />)}
            value={getProperty(order_detail, "computed_amount", 0)}
          />
          <Button type="primary" disabled={button_disabled_status} onClick={handlePayment}>
            完成支付
          </Button>
        </ProCard>
      </ProCard>
    </PageContainer>
  )
};


PaymentPage.propTypes = {


};
PaymentPage.defaultProps = {


};