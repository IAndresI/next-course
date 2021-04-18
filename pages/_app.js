import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp