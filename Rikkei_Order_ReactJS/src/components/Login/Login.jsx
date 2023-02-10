import "./Login.css";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Login(props) {
  let { handleSubmit, onFinish, error } = props;
  return (
    <div className='Container'>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png'
        alt=''
      />
      <div className='error'> {error}</div>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          className='username'
          name='username'
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          className='password'
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <div className='remember'>
              <Checkbox className="remember-password">Remember me</Checkbox>
              <Link to='/resetpass' className='login-form-forgot'>
                Forgot password
              </Link>
            </div>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          <Link className='register' to='/register'>
            register now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Login;
