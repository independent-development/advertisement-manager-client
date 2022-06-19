/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import { Form, Input, InputNumber, Button, Space } from "antd";
import { ProCard, PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import CalculateTypeSelect from "@/components/selecter/CalculateTypeSelect";
import PleaceholderSelect from "@/components/selecter/PleaceholderSelect";

const form_layout = {
  autoComplete: "off",
  labelCol: { flex: "100px" },
  wrapperCol: { flex: "auto" },
  initialValues: {
    calculate_type: "DAY",
    calculate_value: 1,
    pleaceholder: "HOME_TOP"
  }
};

const addonAfter = {
  "YEAR": "年",
  "MONTH": "月",
  "DAY": "天",
  "AMOUNT": "次"
};


export default function CreateCommodityOrder(props) {

  const [form] = Form.useForm();

  const handleValuesChange = useCallback((changeValues, allValues) => {
    console.log("allValues", allValues);
  }, []);

  return (
    <PageContainer content="投放广告">
      <Form {...form_layout} form={form} onValuesChange={handleValuesChange}>
        <ProCard ghost direction="column" gutter={[16, 16]}>
          <ProCard title="计费配置">
            <Form.Item name="calculate_type" label="计费方式">
              <CalculateTypeSelect />
            </Form.Item>
            <Form.Item noStyle shouldUpdate>
              {({ getFieldValue }) => {
                const calculate_type = getFieldValue("calculate_type");
                return (
                  <Form.Item name="calculate_value" label="展示周期">
                    <InputNumber min={1} addonAfter={calculate_type ? addonAfter[calculate_type] : ""} />
                  </Form.Item>
                )
              }}
            </Form.Item>
            <Form.Item name="pleaceholder" label="展示位置">
              <PleaceholderSelect />
            </Form.Item>
          </ProCard>
          <ProCard title="详细配置">
            <Form.Item name="title" label="广告标题">
              <Input placeholder="请输入广告标题" />
            </Form.Item>
            <Form.Item name="discription" label="广告详情">
              <Input.TextArea placeholder="请输入广告详情" />
            </Form.Item>
            <Form.Item name="link_url" label="跳转链接">
              <Input placeholder="请输入广告需要跳转的链接URL(http://或https://)" />
            </Form.Item>
          </ProCard>
          <ProCard style={{ textAlign: "right" }}>
            <Space>
              <div>10 (USDT)</div>
              <Button type="default">重新填写</Button>
              <Button type="default">创建订单(稍后支付)</Button>
              <Button type="primary">立即支付</Button>
            </Space>
          </ProCard>
        </ProCard>
      </Form>
    </PageContainer >
  )
};


CreateCommodityOrder.propTypes = {


};
CreateCommodityOrder.defaultProps = {


};