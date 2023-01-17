import React, { useState } from 'react';
import { FormInput } from './../Forms/FormInput.js';
import Model from './../Model/Model';
import { useNavigate } from 'react-router-dom';
import './Login.css';
export default function Login() {
  const [login, setLogin] = useState({ userName: '', password: '' });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ message: '', route: false });
  function handleSubmit() {
    const users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    const user = users.find((item) => login.userName == item.userName);
    if (!login.userName || !login.password) {
      setShow(!show);
      setMessage({
        message: 'Please Enter user name and password',
        route: false,
      });
    } else if (user) {
      if (user.password == login.password) {
        setShow(!show);
        setMessage({ message: 'login suucess fully', route: true, data: user });
        // navigate('/welcome');
      } else {
        setShow(!show);
        setMessage({ message: 'login failed', route: false });
        setLogin({ userName: '', password: '' });
      }
    } else {
      setShow(!show);
      setMessage({ message: 'user not found', route: false });
    }
  }
  return (
    <div>
      {show && <Model show={show} message={message} setShow={setShow} />}
      <div className="login-form">
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <FormInput
          type="text"
          label="UserName"
          placeholder="Enter User Name"
          className="login-input"
          name="userName"
          value={login.userName}
          onChange={(e) =>
            setLogin({ ...login, [e.target.name]: e.target.value })
          }
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter Password"
          className="login-input"
          value={login.password}
          onChange={(e) =>
            setLogin({ ...login, [e.target.name]: e.target.value })
          }
        />
        <button className="login-btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}
