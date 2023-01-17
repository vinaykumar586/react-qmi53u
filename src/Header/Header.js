import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/form">Dynamic Form</Link>
      <Link to="/table">Table</Link>
      <Link to="/carousel">Carousel</Link>
    </div>
  );
}
