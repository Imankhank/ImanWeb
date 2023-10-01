import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex justify-content-center py-2">
      <div className="col-xl-10 col-11">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
