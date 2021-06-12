import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import { useLazyGetAuthUser, useLazyLogOut } from '../../apollo/actions';
import withApollo from '../../hoc/withApollo';
const Header = ({apollo}) => {
  const router = useRouter();
  const [user, setUser] = useState(null)
  const [hasResponse, setHasResponse] = useState(false)
  const [getAuthUser, {data, loading, error}] = useLazyGetAuthUser()
  const [logout] = useLazyLogOut()

  useEffect(() => {
    getAuthUser();
  }, [])
 
  if(data) {
    if(data.user && !user) {
      setUser(data.user)
      setHasResponse(true)
    }

    if(!data.user && !hasResponse) setHasResponse(true)
  }
    
  
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
            {hasResponse &&
              <Nav className="ml-auto">
                {user && 
                  <>
                    <span className="nav-link mr-4">Welcom {user.userName}</span>
                    <Link href="/"><a className="nav-link btn btn-danger" onClick={() => {
                      logout().then(() => {
                        apollo.resetStore().then(() => router.push('/login'))
                      })
                    }}>Log out</a></Link>
                  </>
                }
                {(error || !user) &&
                  <>
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
                  </>
                }
              </Nav>
            }
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withApollo(Header);