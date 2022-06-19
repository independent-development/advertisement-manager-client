import validator from "validator";

export const calculate_type = [{
  required: true,
  message: "请选择计费类型"
}];

export const calculate_value = [{
  required: true,
  message: "请填写计费周期"
}];

export const pleaceholder = [{
  required: true,
  message: "请选择展示位置"
}];

export const content_type = [{
  required: true,
  message: "请选择广告类型"
}];

export const resource_type = [{
  required: true,
  message: "请选择资源类型"
}];

export const resource_link = [{
  required: true,
  message: "请上传资源或填写外部链接"
}];

export const title = [{
  max: 36,
  required: false,
  message: "请检查广告标题的长度"
}];

export const discription = [{
  max: 200,
  required: false,
  message: "请检查广告描述文案的长度"
}];


export const link_url = [{
  required: false,
  async validator(rule, value) {
    if (!value) {
      return Promise.resolve();
    }
    if (validator.isURL(value)) {
      return Promise.resolve();
    }
    throw new Error('请检查跳转链接的格式!');
  },
  message: "请检查跳转链接的格式!",
}];