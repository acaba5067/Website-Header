import './Navbar.css'

export const Navbar = () => {
  return (
    // <div className='nav'>
    //   <div className="nav-log">Website Header</div>
    //   <ul className="nav-menu">
    //     <li>Home</li>
    //     <li>Explore</li>
    //     <li>About</li>
    //     <li className="nav-contact">Content</li>
    //   </ul>

    // </div>

    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark">Website Header</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link">Home</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Explore</div>
        </li>

        <li className="nav-item">
          <div className="nav-link">About</div>
        </li>

        <li className="nav-item">
          <div className="nav-link">Content</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
