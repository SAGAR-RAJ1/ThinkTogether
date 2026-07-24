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
        top: "0",
        zIndex: "10",
        background: "transparent",
      }}
    >
      <nav className="navbar navbar-expand-lg border-bottom border-dark py-3 fs-5">
        <div
          className="container-fluid mx-3"
          style={{ background: "transparent" }}
        >
          <Link
            className="navbar-brand fs-3"
            style={{ color: "#0D6EFD", background: "transparent" }}
            to="/"
          >
            <i
              className="fa-solid fa-otter"
              style={{ background: "transparent" }}
            ></i>{" "}
            Think-Together
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ background: "transparent" }}
          >
            <ul className="navbar-nav" style={{ background: "transparent" }}>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ideas">
                  Ideas
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/myIdeas">
                  My Ideas
                </Link>
              </li>

              <Dropdown align="end" className="ms-3">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="text-dark text-decoration-none border-0 shadow-none d-flex align-items-center"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    background: "transparent",
                  }}
                >
                  <i className="fa-solid fa-circle-user fs-4 me-2"></i>
                  {user ? user.username : "Account"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {user ? (
                    <>
                      <Dropdown.Item as={Link} to="/profile">
                        Profile
                      </Dropdown.Item>

                      <Dropdown.Item as="button" onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item as={Link} to="/login">
                        Log In
                      </Dropdown.Item>

                      <Dropdown.Item as={Link} to="/signup">
                        Sign Up
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
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
