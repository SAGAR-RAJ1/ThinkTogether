import React, { useState } from 'react'
import "./user.css"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "Signup successful!");
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        toast.error(data.message || "Signup failed!");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="row mt-5 mb-5">
      <h2 className="col-6 offset-3 mb-5">Signup on Think-Together</h2>
      <div className="col-6 offset-3">
        <form noValidate className="needs-validation" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username : </label>
            <input
              type="text"
              placeholder="Add username"
              name="username"
              id="username"
              className="form-control"
              required
              value={form.username}
              onChange={handleChange}
            />
            <div className="valid-feedback">Looks Good!</div>
            <div className="invalid-feedback">Not Good</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email : </label>
            <input
              type="text"
              placeholder="Add email"
              name="email"
              id="email"
              className="form-control"
              required
              value={form.email}
              onChange={handleChange}
            />
            <div className="valid-feedback">Looks Good!</div>
            <div className="invalid-feedback">Not Good</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password : </label>
            <input
              type="text"
              placeholder="Add password"
              name="password"
              id="password"
              className="form-control"
              required
              value={form.password}
              onChange={handleChange}
            />
            <div className="valid-feedback">Looks Good!</div>
            <div className="invalid-feedback">Not Good</div>
          </div>
          <button type="submit" className="btn-success btn">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup
