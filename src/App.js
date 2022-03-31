import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  console.log(user);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {user ? (
        <Admin />
      ) : (
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
