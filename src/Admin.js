import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";

import Dashboard from "./Dashboard";
import Products from "./Products";
import Product from "./Products/Product";
// import Orders from './Orders/Orders'
import Reports from "./Reports";
import CurrentMonth from "./Reports/CurrentMonth";
import LastQuarter from "./Reports/LastQuarter";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":id" element={<Product />} />
      </Route>
      {/* <Route path="orders">
          <Route index element={<Orders />} />
          <Route path=":id" element={<Order />} />
        </Route> */}
      <Route path="reports">
        <Route index element={<Reports />} />
        <Route path="current-month" element={<CurrentMonth />} />
        <Route path="last-quarter" element={<LastQuarter />} />
      </Route>
    </Routes>
  );
};

function Admin() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SideNav />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-2">
            <AdminRoutes />
          </main>
        </div>
      </div>
    </>
  );
}

export default Admin;
