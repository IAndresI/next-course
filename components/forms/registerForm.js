import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = ({onSubmit}) => {

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
        <label htmlFor="email">User Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          {...register('username', { required: true })} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          {...register('email',{ required: true })} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          {...register('password', { required: true })} />
      </div>
      <div className="form-group">
        <label htmlFor="repassword">Repassword</label>
        <input
          type="password"
          className="form-control"
          id="repassword"
          name="repassowrd"
          {...register('repassword', { required: true })} />
      </div>
      {errors.repassword && <p>repassowrd is required.</p>}
      <button
        type="submit"
        className="btn btn-primary bg-blue py-2 ttu">Submit</button>
    </form>
  );
};

export default RegisterForm;