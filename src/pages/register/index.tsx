import { Button, Form, Input, Select } from "antd";
import { Header } from "../../components/header";

import { useNavigate } from "react-router-dom";
import userService from "../../service/userService";
import { useState } from "react";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const Register: React.FC = () => {
  const [form] = Form.useForm();
  const passwordValidator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    setLoading(true);
    const currentUser = {
      email: values.email,
      password: values.password,
    };
    userService
      .register(currentUser)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });

    setLoading(false);
    const timeoutId = setTimeout(() => {
      navigate("/login");

      return () => clearTimeout(timeoutId);
    }, 3000);
  };

  return (
    <>
      <Header />
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "auto" }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            { min: 8 },
            {
              validator: (_, value) =>
                value && passwordValidator.test(value)
                  ? Promise.resolve()
                  : Promise.reject("Password does not match criteria."),
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="userType"
          label="You are?"
          rules={[{ required: true, message: "Please select this option!" }]}
        >
          <Select placeholder="select your type">
            <Option value="Chef">Chef</Option>
            <Option value="User">User</Option>
            <Option value="Investigate">Investigate</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
