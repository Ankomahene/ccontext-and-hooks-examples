import React from 'react';
import { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('shadrack');
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('123');

  return (
    <>
      <h1>User Login</h1>
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => {
            console.log(username, email, password);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
