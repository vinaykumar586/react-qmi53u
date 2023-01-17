import React, { useState } from 'react';
import { FormInput } from './../Forms/FormInput.js';
import Model from './../Model/Model';
import './Signup.css';
export default function Signup() {
  const obj = {
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  };

  const [user, setUser] = useState(obj);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ message: '', route: false });
  console.log(user);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    let nameRegex = /^([A-Za-z]{1,10})+([A-Za-z0-9])+$/;
    let passwordRegex = /^([A-Z]{1,5})+([A-Za-z0-9])+$/;
    var regexEmail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]){2,40}$/;
    if (
      !user.email ||
      !user.password ||
      !user.mobileNumber ||
      !user.userName ||
      !user.confirmPassword
    ) {
      setShow(!show);
      setMessage({ message: 'Please Fill all Fields', route: false });
    } else if (!regexEmail.test(user.email)) {
      setShow(!show);
      setMessage({ message: 'Please Enter Valid Email', route: false });
    } else if (!nameRegex.test(user.userName)) {
      setShow(!show);
      setMessage({
        message: 'User name should not start with numbers',
        route: false,
      });
    } else if (user.password != user.confirmPassword) {
      setShow(!show);
      setMessage({
        message: 'mismatched password and confrim password',
        route: false,
      });
    } else {
      const users = JSON.parse(localStorage.getItem('users'));
      console.log(users);
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      setShow(!show);
      setMessage({
        message: 'Account created Successfully',
        route: false,
      });
      setUser(obj);
    }
  }
  return (
    <div>
      {show && <Model show={show} message={message} setShow={setShow} />}
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center' }}>SignUp</h2>
          <FormInput
            label={'Email'}
            name="email"
            type="text"
            placeholder="Please Enter Email"
            className="signup-input"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <FormInput
            label={'UserName'}
            name="userName"
            type="text"
            placeholder="Please Enter User Name"
            value={user.userName}
            className="signup-input"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <FormInput
            label={'Mobile'}
            type="number"
            name="mobileNumber"
            placeholder="Please Enter Mobile Number"
            value={user.mobileNumber}
            className="signup-input"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <FormInput
            label={'Password'}
            type="password"
            placeholder="Please Enter Password"
            value={user.password}
            className="signup-input"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <FormInput
            label={'ConfirmPassword'}
            type="password"
            placeholder="Please Enter Confirm Password"
            className="signup-input"
            value={user.confirmPassword}
            name="confirmPassword"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <button className="signup-btn">SignUp</button>
        </form>
      </div>
    </div>
  );
}
