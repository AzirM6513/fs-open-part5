import React from 'react';
import Error from './Error';

const LoginForm = ({ loginObj, errorMessage }) => {
  // fixme: should destructure in function params
  const {
    handleLogin,
    username,
    password,
    setUsername,
    setPassword,
  } = loginObj;
  return (
    <div>
      <h2>login to application</h2>
      <Error message={errorMessage} />
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            className='login'
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            className='login'
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  );
};

export default LoginForm;