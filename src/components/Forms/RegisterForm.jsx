import {FormWrapper} from '../../styled/components/forms/LoginForm';
import {Button, Form, Input} from 'antd';

export const RegisterForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <FormWrapper
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
      >

        <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
        >
          <div style={{marginLeft:'28px'}}><Input/></div>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
            wrapperCol={{
              offset: 10,
              span: 16,
            }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </FormWrapper>
  );
}