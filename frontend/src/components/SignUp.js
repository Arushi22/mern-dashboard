import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="register">
      <h1>Signup</h1>
      <input className="inputBox" type="text" placeholder="Enter Name" />
      <input className="inputBox" type="mail" placeholder="Enter Email" />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
      />
      <button className="appButton">SignnUp</button>
    </div>
  );
}

export default SignUp;
