
function Header() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand text-white" href="#">Portfolio Francisco Amador</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Presentación personal </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">Call to Action</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">Footer</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
