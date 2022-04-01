import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <>
      <Admin />
      {/* {token ? (
      ) : (
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      )} */}
    </>
  );
}

export default App;
