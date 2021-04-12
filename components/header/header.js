import Link from 'next/link';
const Header = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
        <Link href="/">
          <a className="navbar-brand mr-3 font-weight-bold">AndreSpez</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mr-3">
              <Link href="/portfolios">
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
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link href="/register">
                <a className="nav-link">Sign Up</a>
              </Link>
              
            </li>
            <li className="nav-item mr-3">
              <Link href="/login">
                <a className="nav-link btn btn-success bg-green-2 bright">Sign In</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;