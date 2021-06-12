import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = ({onSubmit, loading}) => {
  const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label style={{color: errors.email ? "red" : ""}} htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register('email', { required: true })} />
      </div>
      <div className="form-group">
        <label style={{color: errors.password ? "red" : ""}} htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register('password', { required: true })} />
      </div>
      <button
        type="submit"
        className="btn btn-primary bg-blue py-2 ttu" disabled={!!loading}>{loading ? "Loading..." : "Submit"}</button>
    </form>
  );
};

export default LoginForm;