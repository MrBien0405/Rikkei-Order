import "./Register.css";
import React from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  WhatsAppOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Register(props) {
  let { handleSubmit, onFinish, error } = props;

  return (
    <div className='Container'>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png'
        alt=''
      />
      <div className='error'>{error}</div>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          className='password'
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
          name='email'
          rules={[
            {
              required: true,
              message: "Please input your gmail!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className='site-form-item-icon' />}
            type='email'
            placeholder='Gmail'
          />
        </Form.Item>
        <Form.Item
          className='password'
          name='Phone'
          rules={[
            {
              required: true,
              message: "Please input your Phone!",
            },
          ]}
        >
          <Input
            prefix={<WhatsAppOutlined className='site-form-item-icon' />}
            type='number'
            placeholder='Phone'
          />
        </Form.Item>
        {/* <Form.Item
                    className='password'
                    name="text"
                    rules={ [
                        {
                            required: true,
                            message: 'Please input your Class!',
                        },
                    ] }
                >
                    <Input
                        prefix={ <SolutionOutlined className="site-form-item-icon" /> }
                        type="text"
                        placeholder="Class"
                    />
                </Form.Item> */}
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
        <Form.Item
          className='password'
          name='passwordre'
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
            placeholder='Re-Enter Password'
          />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Register
          </Button>
          <Link className='register' to='/login'>
            Login now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Register;
