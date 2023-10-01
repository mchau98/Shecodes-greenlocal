import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onFinish = () => {
      const userObject = {
        email : email
    }
    localStorage.setItem('user-infor', JSON.stringify(userObject));
    toast.success('Login sucessfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    setTimeout(() => {
        navigate('/')
    }, 3000);
  };

  const onFinishFailed = () => {
    toast.error('Login failed!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  function handleEmail (e){
    setEmail(e.target.value);
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-2">
          <div className="box">
            <h1 className="mt-40 mb-40 text-center">Login</h1>
            <div>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email!',
                    },
                  ]}
                >
                  <Input onChange={handleEmail} value={email}/>
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
                  <Input.Password onChange={handlePassword} value={password}/>
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>
              {loginError && (
                <Alert message={loginError} type="error" showIcon className="mt-20" />
              )}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
