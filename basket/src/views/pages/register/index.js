import './index.css'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
import { Button, Checkbox, Form, Input, Alert, Space } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register (){
    const nagivate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     const onFinish = () => {
        const userObject = {
            email : email
        }
        localStorage.setItem('user-infor', JSON.stringify(userObject));
        toast.success('Register sucessfully', {
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
            nagivate('/')
        }, 3000);
  };
  
  const onFinishFailed = () => {
    toast.error('Register failed !', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  };

    function handleEmail(e){
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    function handlePassword(e)
    {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div class="container">
        <div class="row">
            <div class="col-6 offset-2">
            <div class="box">
                <h1 className='mt-40 mb-40 text-center'>Register form</h1>
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
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your email!',
                            },
                        ]}
                        >
                        <Input onChange={handleEmail}
                            value = {email}
                        />
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
                        <Input.Password onChange={handlePassword} 
                            value={password}
                        />
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
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                    <ToastContainer/>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    )
}

export default Register