import React from 'react';
import { useLocation } from 'react-router-dom';
export default function UserDetails() {
  const location = useLocation();
  const user = location.state;
  console.log(location);
  return (
    <div>
      {!!user && (
        <div>
          <h1>User Details</h1>
          <ul>
            <li>{user.email}</li>
            <li>{user.userName}</li>
            <li>{user.mobileNumber}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
