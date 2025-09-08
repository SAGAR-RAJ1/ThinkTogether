import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom border-dark py-3 fs-5 ">
        <div className="container-fluid mx-3 ml-4 " >
          <a className="navbar-brand fs-3" style={{color:"#0D6EFD"}} href="#"><i class="fa-solid fa-otter"></i>Think-Together</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="ideaCont">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="ideaCont" smooth={true} duration={500}>Ideas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="ideaCont" smooth={true} duration={500}>My Ideas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="ideaCont" smooth={true} duration={500}>Log In</Link>
              </li>
           
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#"><button className="btn btn-primary">Post Idea</button></a>
              </li>
            </ul>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
