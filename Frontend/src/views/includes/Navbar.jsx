import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Includes.css";
import { Dropdown } from "react-bootstrap";
function Navbar() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleLogout = async () => {
    try {
      await axios.post(
        `${API}/user/logout`,
        {},
        {
          withCredentials: true,
        },
      );

      toast.success("Logged out successfully");

      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        width: "100%",
        top: "0",
        zIndex: "10",
        background: "transparent",
      }}
    >
      <nav className="navbar navbar-expand-lg border-bottom border-dark py-3 fs-5 ">
        <div
          className="container-fluid mx-3 ml-4  .navbar"
          style={{ background: "transparent" }}
        >
          <Link
            className="navbar-brand fs-3"
            style={{ color: "#0D6EFD", background: "transparent" }}
            to="/"
          >
            <i
              style={{ background: "transparent" }}
              class="fa-solid fa-otter"
            ></i>
            Think-Together
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ background: "transparent" }}
          >
            <ul className="navbar-nav" style={{ background: "transparent" }}>
              <li className="nav-item" style={{ background: "transparent" }}>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ background: "transparent" }}>
                <Link className="nav-link" to="/ideas">
                  Ideas
                </Link>
              </li>
              <li className="nav-item" style={{ background: "transparent" }}>
                <Link
                  className="nav-link"
                  to="/myIdeas"
                  smooth={true}
                  duration={500}
                >
                  My Ideas
                </Link>
              </li>
              {/* <li className="nav-item"  style={{background:"transparent"}}>
                <Link
                  className="nav-link"
                  to="/login"
                  smooth={true}
                  duration={500}
                >
                  Log In
                </Link>
              </li>
              <li className="nav-item"  style={{background:"transparent"}}>
                <Link
                  className="nav-link"
                  to="/signup"
            
                >
                  Sign up
                </Link>
              </li> */}

              <Dropdown style={{ background: "transparent" }}>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  User
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/login">Log In</Dropdown.Item>
                  <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleLogout}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
            <ul
              className="navbar-nav ms-auto"
              style={{ background: "transparent" }}
            >
              <li className="nav-item" style={{ background: "transparent" }}>
                <Link className="nav-link" to="/post">
                  <button className="btn btn-primary">Post Idea</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
