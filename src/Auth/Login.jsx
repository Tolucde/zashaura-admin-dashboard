import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const login_admin = (e) => {
    // return dispatch(login(form))
    e.preventDefault();
    console.log(form);
  };

  const handle_input = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <section className="d-flex text-center justify-content-center px-auto py-5">
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Welcome Admin</h1>

          <div className="form-floating pb-2">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              autoComplete="email"
              name="email"
              onChange={handle_input}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
              onChange={handle_input}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={login_admin}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">
            Zashaura © {new Date().getFullYear()}{" "}
          </p>
        </form>
      </main>
    </section>
  );
};

export default Login;
