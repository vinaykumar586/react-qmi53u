import React, { useState } from 'react';
import FormInput from './../Forms/FormInput';
import profile from './../JSON/Profile';

export default function ProfileTable() {
  const [searchText, setSearchText] = useState({ name: '', value: '' });
  const [users, setUsers] = useState(profile);
  let count = 0;
  console.log('test');
  function userList() {
    if (searchText.name && searchText.name == 'name' && searchText.value) {
      return profile.filter((item) =>
        item.name.match(new RegExp(searchText.value, 'i'))
      );
    } else if (
      searchText.name &&
      searchText.name == 'age' &&
      searchText.value
    ) {
      return profile.filter((item) =>
        item.age.match(new RegExp(searchText.value, 'i'))
      );
    } else if (
      searchText.name &&
      searchText.name == 'gender' &&
      searchText.value
    ) {
      return profile.filter((item) => item.gender == searchText.value);
    } else {
      return profile;
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;

    setSearchText({ name: name, value: value });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                value={searchText.name == 'name' ? searchText.value : ''}
                placeholder="Search By Name"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="age"
                value={searchText.name == 'age' ? searchText.value : ''}
                type="number"
                placeholder="Search By Age"
                onChange={handleChange}
              />
            </td>
            <td>
              <select
                name="gender"
                defaultValue={searchText == 'gender' ? searchText.value : ''}
                onChange={(e) => handleChange(e)}
              >
                <option>male</option>
                <option>female</option>
              </select>
            </td>
          </tr>
        </thead>
        <tbody>
          {userList().map((item, id) => (
            <tr key={id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
