import Link from 'next/link';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
const Header = () => {
  return (
    <header className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand>
          <Link href="/">
            <a className="mr-3 font-weight-bold navbar-brand">
              AndreSpez
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
              <li className="nav-item mr-3">
                <Link href="/portfolios/">
                  <a className="nav-link">Portfolio</a>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link href="/courses">
                  <a className="nav-link">Courses</a>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Cv</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Ask me</a>
              </li>
            </Nav>
            <Nav className="ml-auto">
              <li className="nav-item mr-3">
                <Link href="/login">
                  <a className="nav-link btn">Sign In</a>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link href="/register">
                  <a className="nav-link btn btn-success bg-green-2 bright">Sign Up</a>
                </Link>
              </li>
            </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </header>
  );
};

export default Header;