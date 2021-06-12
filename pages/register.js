import Layout from 'components/layout';
import withApollo from '../hoc/withApollo';
import { SIGN_UP } from '../apollo/queries';
import { useMutation } from '@apollo/client';
import RegisterForm from '../components/forms/registerForm';
import { useRouter } from 'next/dist/client/router';


const Register = () => {
  const [signUp, {data, loading, error}] = useMutation(SIGN_UP)
  const router  = useRouter();

  if(data && data.signUp) router.push('/login')
  else {
    console.log(error?.graphQLErrors);
    console.log(error?.graphQLErrors?.[0]?.message);
  }

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
              {loading ? "Loading...":""}
              {error ? <div className="alert alert-danger">{error.message}</div> : ""}
              <RegisterForm loading={loading} onSubmit={(registerData) => {
                signUp({ variables: { 
                  avatar: registerData.avatar, 
                  username: registerData.username, 
                  email: registerData.email, 
                  password: registerData.password, 
                  repassword: registerData.repassword} });
              }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo(Register);