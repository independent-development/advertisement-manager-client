/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import { Form, Input, DatePicker, Button, Space } from "antd";
import { ProCard, PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import PleaseholderSelect from "@/components/selecter/PleaseholderSelect";

const form_layout = {
  autoComplete: "off",
  labelCol: { flex: "100px" },
  wrapperCol: { flex: "auto" }
};

export default function CreateCommodityOrder(props) {

  const handleValuesChange = useCallback((changeValues, allValues) => {
    console.log("allValues", allValues);
  }, []);

  return (
    <PageContainer content="投放广告">
      <ProCard ghost direction="column" gutter={[16, 16]}>
        <ProCard>
          <Form {...form_layout} onValuesChange={handleValuesChange}>
            <Form.Item name="pleaseholder" label="展示位置">
              <PleaseholderSelect />
            </Form.Item>
            <Form.Item name="show_date" label="展示周期">
              <DatePicker.RangePicker style={{ width: "100%" }} placeholder={["请选择开始日期", "请选择结束日期"]} />
            </Form.Item>
            <Form.Item name="title" label="标题">
              <Input placeholder="请输入广告标题" />
            </Form.Item>
            <Form.Item name="discription" label="详情">
              <Input.TextArea placeholder="请输入广告详情" />
            </Form.Item>
            <Form.Item name="link_url" label="导航">
              <Input placeholder="请输入广告需要跳转的链接URL(http://或https://)" />
            </Form.Item>
          </Form>
        </ProCard>
        <ProCard style={{ textAlign: "right" }}>
          <Space>
            <div>10 (USDT)</div>
            <Button type="default">重置</Button>
            <Button type="primary">支付</Button>
          </Space>
        </ProCard>
      </ProCard>
    </PageContainer>
  )
};


CreateCommodityOrder.propTypes = {


};
CreateCommodityOrder.defaultProps = {


};