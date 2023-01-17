import React from 'react';
import './style.css';
import UserForm from './UserForm';
import Header from './Header/Header';
import Auth from './Auth';
import UserDetails from './UserDeatils/UserDetails';
import ProfileTable from './Table/ProfileTable';
import Carousel from './Carousel/Carousel';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function App() {
  let data = [
    {
      email: 'vinaykumar.gangadhar586@gmail.com',
      userName: 'Vinaykumar',
      password: 'root',
      confirmPassword: 'root',
      mobileNumber: '7675985301',
    },
  ];
  if (!localStorage.getItem('users')) {
    let user = JSON.stringify(data);
    localStorage.setItem('users', user);
  }
  return (
    <BrowserRouter>
      <div>
        <div className="header-component">
          <Header />
        </div>
        <Routes>
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Auth />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/welcome" element={<UserDetails />} />
          <Route path="/table" element={<ProfileTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
