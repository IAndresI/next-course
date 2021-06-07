import Layout from 'components/layout'
import LoginForm from 'components/forms/loginForm'
const Login = () => {
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
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;