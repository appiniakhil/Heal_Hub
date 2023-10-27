import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import main from '../main.svg';
import Wrapper from '../assets/LandingPage';
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <Wrapper>
    <div className="main">
      
      <div className=" container page">
      
      <div className="authentication-form card p-3 info">
      <h1>
              <span>HealHub</span> app
            </h1>
            <p>
            Experience healthcare like never before with HealHub,Seamlessly connect with doctors, effortlessly book appointments, and receive real-time updates, all through an intuitive interface designed for a truly enhanced healthcare journey.</p>
       
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            REGISTER
          </Button>

          <Link to="/login" className="anchor mt-2">
            CLICK HERE TO LOGIN
          </Link>
        </Form>
      </div>
      <img src={main} alt='task hunt' className='img main-img' />
      </div>
    </div>
   
    </Wrapper>
  );
}

export default Register;
