import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import userService from "../../service/userService";
import './login.css'


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



export const Login: React.FC = () => {
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
      .login(currentUser)
      .then((response: any) => {
        localStorage.setItem(
          "accessToken",
          response.data.accessToken
        );
        navigate("/");
      })
      .catch((e: Error) => {
        console.log(e);
      });

    setLoading(false);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) navigate("/");
  }, [navigate])

  return (
    <>
      <Header  />
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

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading} >
            Login
          </Button>
          &nbsp;Or&nbsp;
          <Button type="primary" htmlType="submit">
            <Link to='/register' className="button-signup">Signup</Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
