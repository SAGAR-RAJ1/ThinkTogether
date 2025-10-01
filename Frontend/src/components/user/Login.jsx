import "./user.css"
import React, { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "Login successful!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login">
      <div className="row mt-3">
        <h2 className="col-6 offset-3 mb-5">Login on Think-Together</h2>
        <div className="col-6 offset-3">
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username :</label>
              <input
                type="text"
                placeholder="Add username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password :</label>
              <input
                type="password"
                placeholder="Add password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn-success btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;