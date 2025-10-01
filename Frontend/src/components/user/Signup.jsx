import React from 'react'
import "./user.css"

function Signup() {
  return (
    <div class="row mt-5 mb-5">
    <h2 class="col-6 offset-3 mb-5">Signup on Think-Together</h2>
    <div class="col-6 offset-3">
        <form action="http://localhost:3000/user/signup" method="post" novalidate class="needs-validation">
            <div class="mb-3">
                <label for="username" class="form-label">Username : </label>
                <input
                  type="text"
                  placeholder="Add username"
                  name="username"
                  id="username"
                  class="form-control"
                  required
                />
                <div class="valid-feedback">Looks Good!</div>
                <div class="invalid-feedback">Not Good</div>
              </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email : </label>
                <input
                  type="text"
                  placeholder="Add email"
                  name="email"
                  id="email"
                  class="form-control"
                  required
                />
                <div class="valid-feedback">Looks Good!</div>
                <div class="invalid-feedback">Not Good</div>
              </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password : </label>
                <input
                  type="text"
                  placeholder="Add password"
                  name="password"
                  id="password"
                  class="form-control"
                  required
                />
                <div class="valid-feedback">Looks Good!</div>
                <div class="invalid-feedback">Not Good</div>
              </div>
              <button class="btn-success btn">Sign up</button>
        </form>
    </div>
</div>
  )
}

export default Signup
