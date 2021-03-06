import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
  });

  const [error, setError] = useState({});

  const handle_submit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, confirmPassword, token } =
      form;

    if (password !== confirmPassword) {
      setError((state) => ({ ...state, password: "Passwords do not match" }));
    }

    if (password.length < 8) {
      setError((state) => ({
        ...state,
        password: "Password must be 8 characters or more",
      }));
    }

    setError({});

    console.log(form);
  };

  const handle_input = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <div className="d-flex text-center justify-content-center py-5">
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h4 mb-3 fw-normal">Let's Get You Started</h1>
          <div className="row pb-3">
            <div className="col form-floating pb-2">
              <input
                type="text"
                className="form-control px-2"
                placeholder="First name"
                aria-label="First name"
                autoComplete="given-name"
                id="firstName"
                name="firstname"
                onChange={handle_input}
              />
              <label htmlFor="firstName">First name</label>
            </div>
            <div className="col form-floating pb-2">
              <input
                type="text"
                className="form-control px-2"
                placeholder="Last name"
                aria-label="Last name"
                autoComplete="family-name"
                id="lastName"
                name="lastname"
                onChange={handle_input}
              />
              <label htmlFor="lastName">Last name</label>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col form-floating pb-2">
              <input
                type="email"
                className="form-control px-2"
                placeholder="email@example.com"
                aria-label="Email"
                autoComplete="email"
                id="email"
                name="email"
                onChange={handle_input}
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="col form-floating pb-2">
              <input
                type="text"
                className="form-control px-2"
                placeholder="Token"
                aria-label="token"
                id="token"
                name="token"
                onChange={handle_input}
              />
              <label htmlFor="token">Token</label>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col form-floating pb-2">
              <input
                type="password"
                className="form-control px-2"
                placeholder="Password"
                aria-label="Password"
                autoComplete="current-password"
                id="password"
                name="password"
                onChange={handle_input}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="col form-floating pb-2">
              <input
                type="password"
                className="form-control px-2"
                placeholder="Confirm Password"
                aria-label="Password Confirmation"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handle_input}
              />
              <label htmlFor="confirmPassword">Password</label>
              {error.password && (
                <p className="text-danger">{error.password}</p>
              )}
            </div>
          </div>
          <button
            className="w-50 my-4 btn btn-lg btn-primary"
            type="submit"
            onClick={handle_submit}
          >
            Sign Up
          </button>
          <p className="mt-5 m-3 text-muted">
            Zashaura ?? {new Date().getFullYear()}
          </p>
        </form>
      </main>
    </div>
  );
};

export default Register;
