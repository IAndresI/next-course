import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = ({onSubmit, loading}) => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="avatar">Avatar</label>
        <input
          type="text"
          className="form-control"
          id="avatar"
          name="avatar"
          {...register('avatar')} />
      </div>
      <div className="form-group">
        <label style={{color: errors.username ? "red" : ""}} htmlFor="email">User Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          {...register('username', { required: true })} />
      </div>
      <div className="form-group">
        <label style={{color: errors.email ? "red" : ""}} htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          {...register('email',{ required: true })} />
      </div>
      <div className="form-group">
        <label style={{color: errors.password ? "red" : ""}} htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          {...register('password', { required: true })} />
      </div>
      <div className="form-group">
        <label style={{color: errors.repassword ? "red" : ""}} htmlFor="repassword">Repassword</label>
        <input
          type="password"
          className="form-control"
          id="repassword"
          name="repassowrd"
          {...register('repassword', { required: true })} />
      </div>
      <button
        type="submit"
        className="btn btn-primary bg-blue py-2 ttu" disabled={!!loading}>{loading ? "Loading..." : "Submit"}</button>
    </form>
  );
};

export default RegisterForm;