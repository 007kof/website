export function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-semibold" href="#">Junjie Ji Chen</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarScroll" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto my-2 my-sm-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}