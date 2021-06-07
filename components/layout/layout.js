import Header from '../header';
import Footer from '../footer';
const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;