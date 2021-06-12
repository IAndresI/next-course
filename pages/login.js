import Layout from 'components/layout'
import LoginForm from 'components/forms/loginForm'
import { SIGN_IN } from '../apollo/queries';
import withApollo from '../hoc/withApollo';
import { useRouter } from 'next/dist/client/router';
import { useLogin } from '../apollo/actions';
const Login = () => {
  const router = useRouter();
  const [signIn, {data, loading, error}] = useLogin(SIGN_IN)

  if(data && data.signIn) router.push('/')

  return (
    <Layout>
      <div className="container">
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Login Page</h1>
            </div>
          </div>
        </section>
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <h1 className="page-title">Login</h1>
              {loading ? "Loading...":""}
              {error ? <div className="alert alert-danger">{error.message}</div> : ""}
              <LoginForm loading={loading} onSubmit={(loginData) => {
                signIn({variables: {
                  email: loginData.email, 
                  password: loginData.password
                }})
              }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo(Login);