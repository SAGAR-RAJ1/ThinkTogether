import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Dropdown } from "react-bootstrap";
import "./Includes.css";

function Navbar() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API}/user/profile`, {
          withCredentials: true,
        });

        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNavDropdown");

    if (navbar && navbar.classList.contains("show")) {
      const bsCollapse =
        window.bootstrap.Collapse.getOrCreateInstance(navbar);
      bsCollapse.hide();
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${API}/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      closeNavbar();
      toast.success("Logged out successfully");
      setUser(null);
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
        top: 0,
        zIndex: 10,
        background: "#fff",
      }}
    >
      <nav className="navbar navbar-expand-lg border-bottom border-dark py-3 fs-5">
        <div className="container-fluid mx-3">
          <Link
            className="navbar-brand fs-3"
            style={{ color: "#0D6EFD" }}
            to="/"
            onClick={closeNavbar}
          >
            <i className="fa-solid fa-otter"></i> Think-Together
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
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/ideas"
                  onClick={closeNavbar}
                >
                  Ideas
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/myIdeas"
                  onClick={closeNavbar}
                >
                  My Ideas
                </Link>
              </li>

              <li className="nav-item">
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-basic"
                    className="text-dark text-decoration-none border-0 shadow-none d-flex align-items-center"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    <i className="fa-solid fa-circle-user fs-4 me-2"></i>

                    {user ? user.username : "Account"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {user ? (
                      <>
                        <Dropdown.Item
                          as={Link}
                          to="/profile"
                          onClick={closeNavbar}
                        >
                          Profile
                        </Dropdown.Item>

                        <Dropdown.Item
                          as="button"
                          onClick={handleLogout}
                        >
                          Logout
                        </Dropdown.Item>
                      </>
                    ) : (
                      <>
                        <Dropdown.Item
                          as={Link}
                          to="/login"
                          onClick={closeNavbar}
                        >
                          Login
                        </Dropdown.Item>

                        <Dropdown.Item
                          as={Link}
                          to="/signup"
                          onClick={closeNavbar}
                        >
                          Sign Up
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-3 mt-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/post"
                  onClick={closeNavbar}
                >
                  <button className="btn btn-primary">
                    Post Idea
                  </button>
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