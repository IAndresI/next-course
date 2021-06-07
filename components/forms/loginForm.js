import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password" />
      </div>
      <button
        type="submit"
        className="btn btn-primary bg-blue py-2 ttu">Submit</button>
    </form>
  );
};

export default LoginForm;