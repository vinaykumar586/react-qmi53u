import React, { useState } from 'react';
import './UserForm.css';

export default function UserForm() {
  const [users, setUsers] = useState([
    {
      name: '',
      age: '',
    },
  ]);

  function showFields() {
    return users.map((item, id) => (
      <div key={id}>
        <input
          placeholder="Enter Name"
          name="name"
          type="text"
          value={item.name}
          onChange={(e) => {
            (item.name = e.target.value), setUsers([...users]);
          }}
        />
        <input
          placeholder="Enter age"
          name="age"
          type="number"
          onChange={(e) => {
            (item.age = e.target.value), setUsers([...users]);
          }}
        />
        <button onClick={() => removeItem(item, id)}>Remove</button>
      </div>
    ));
  }

  function removeItem(data, index) {
    if (users.length > 1) {
      const removeUsers = users.filter((item, id) => id != index);
      setUsers(removeUsers);
    }
  }
  function addFields() {
    setUsers([
      ...users,
      {
        name: '',
        age: '',
      },
    ]);
  }
  console.log(users.length);
  return (
    <div>
      <div>{showFields()}</div>
      <hr />
      <button className="addBtn" onClick={addFields}>
        AddMore
      </button>
      <div>
        {users.length >= 1 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            {users.map((item, id) => {
              if (item.name) {
                return (
                  <tbody>
                    <tr key={id}>
                      <td style={{ textAlign: 'center' }}>{item.name}</td>
                      <td>{item.age}</td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        )}
      </div>
    </div>
  );
}
