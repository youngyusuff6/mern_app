import { Button, Form, Input } from 'antd';


export default function Register() {
 
  const registerUser = ( values) => {
  
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    // <form onSubmit={registerUser}>

    //       <div className="container mt-4">
    //       <div className="mb-3 row">
    //         <label htmlFor="inputName" className=" col-form-label">Name:</label>
    //         <div className="col-8">
    //           <input type="text" className="form-control" name="name" id="inputName" placeholder="Name"/>
    //         </div>
    //       </div>
          
    //       <div className="mb-3 row">
    //         <label htmlFor="inputName" className=" col-form-label">Email:</label>
    //         <div className="col-8">
    //           <input type="email" className="form-control" name="email" id="inputEmail" placeholder="Email Address"/>
    //         </div>
    //       </div>

    //       <div className="mb-3 row">
    //         <label htmlFor="inputName" className=" col-form-label">Password:</label>
    //         <div className="col-8">
    //           <input type="password" className="form-control" name="password" id="inputPwd" placeholder="Password"/>
    //         </div>
    //       </div>
    //       <button className="btn btn-primary btn-small">Submit</button>
    //   </div>
    // </form>

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
    onFinish={registerUser}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className='mt-4'
  >
   
    <Form.Item
      label="Name"
      name="Name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
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
      <Input />
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
      <Input.Password />
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
      );
}
