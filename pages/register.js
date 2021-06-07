import Layout from 'components/layout';
import withApollo from '../hoc/withApollo';
import { SIGN_UP } from '../apollo/queries';
import { useMutation } from '@apollo/client';
import RegisterForm from '../components/forms/registerForm';
import { useEffect } from 'react';


const Register = () => {
  const [signUp, {data, loading, error}] = useMutation(SIGN_UP)

  useEffect(() => {
    return () => {
    }
  }, [data])

  return (
    <Layout>
      <div className="container">
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Register Page</h1>
            </div>
          </div>
        </section>
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <h1 className="page-title">Register</h1>
              {loading ? "LOading...":""}
              {error ? error.message:""}
              <RegisterForm onSubmit={(registerData) => {
                console.log(registerData);
                signUp({ variables: { avatar: registerData.avatar, username: registerData.username, email: registerData.email, password: registerData.password, repassword: registerData.repassword} });
                console.log(data);
              }} />
              {data?._id}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo(Register);