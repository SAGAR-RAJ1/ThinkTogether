import React from 'react'
import "./user.css"

function Login() {
  return (
    <div className="login ">
     <div class="row mt-3">
    <h2 class="col-6 offset-3 mb-5">Login on Think-Together</h2>
    <div class="col-6 offset-3">
        <form action="../" method="post" novalidate class="needs-validation">
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
              <button class="btn-success btn">Login</button>
        </form>
    </div>
</div>
    </div>
  )
}

export default Login
