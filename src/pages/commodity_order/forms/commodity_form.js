/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import { Form, Input, InputNumber } from "antd";
import { ProCard } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

import PleaceholderSelect from "@/components/selecter/PleaceholderSelect";
import CalculateTypeSelect from "@/components/selecter/CalculateTypeSelect";

import { calculate_type, calculate_value, pleaceholder, title, discription, content_url, link_url } from "./validator";

const form_layout = {
  autoComplete: "off",
  labelCol: { flex: "100px" },
  wrapperCol: { flex: "auto" },
  initialValues: {
    calculate_type: "DAY",
    calculate_value: 1,
    pleaceholder: ["HOME_TOP"]
  }
};

const addonAfter = {
  "YEAR": "年",
  "MONTH": "月",
  "DAY": "天",
  "AMOUNT": "次"
};

export default function CommodityForm(props) {
  const { form, ...otherProps } = props;

  const handleValuesChange = useCallback((changeValues, allValues) => {
    console.log("allValues", allValues);
  }, []);

  return (
    <Form {...form_layout} form={form} onValuesChange={handleValuesChange}>
      <ProCard ghost direction="column" gutter={[16, 16]}>
        <ProCard title="计费配置">
          <Form.Item name="calculate_type" label="计费方式" rules={calculate_type}>
            <CalculateTypeSelect />
          </Form.Item>
          <Form.Item noStyle shouldUpdate>
            {({ getFieldValue }) => {
              const calculate_type = getFieldValue("calculate_type");
              return (
                <Form.Item name="calculate_value" label="展示周期" rules={calculate_value}>
                  <InputNumber min={1} addonAfter={calculate_type ? addonAfter[calculate_type] : ""} />
                </Form.Item>
              )
            }}
          </Form.Item>
          <Form.Item name="pleaceholder" label="展示位置" rules={pleaceholder}>
            <PleaceholderSelect />
          </Form.Item>
        </ProCard>
        <ProCard title="详细配置">
          <Form.Item name="content_url" label="广告内容" rules={content_url}>
            <Input.TextArea placeholder="请输入广告详情(最大200个字符)" />
          </Form.Item>
          <Form.Item name="title" label="广告标题" rules={title}>
            <Input placeholder="请输入广告标题(最大36个字符)" />
          </Form.Item>
          <Form.Item name="discription" label="广告描述" rules={discription}>
            <Input.TextArea style={{ resize: "none" }} rows={4} placeholder="请输入广告描述(最大200个字符)" />
          </Form.Item>
          <Form.Item name="link_url" label="跳转链接" rules={link_url} validateTrigger="onBlur">
            <Input placeholder="请输入广告需要跳转的链接URL(http://或https://)" />
          </Form.Item>
        </ProCard>
      </ProCard>
    </Form>
  )
};


CommodityForm.propTypes = {


};
CommodityForm.defaultProps = {


};