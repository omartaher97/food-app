import React from "react";
import logo from "../../../../assets/images/logo.png";
export default function Notfound() {
  return (
    <>
      <div className="container-fluid notf ">
        <img src={logo} alt="logo" />
        <div className="d-flex align-items-center">

        <div className="content ms-5 my-5 ">
        <p className="font-weight-bold larger">Oops.... </p>
        <h4>Page not found </h4>
        <p>
          This Page doesn’t exist or was removed! We suggest you back to home.
        </p>
        <button className="btn btn-success back"> <i class="fa-solid fa-arrow-left"></i> Back To Home</button>
        </div>

        </div>
    
       
      </div>
    </>
  );
}
