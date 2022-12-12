import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/09/42/67/1000_F_209426728_lE73V46vna6phxnAXrkcAuDMIkamAPMm.jpg"
          className="card-img"
          alt="Background"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container ">
            <h5 className="card-title display-3 fw-bolder mb-0 ">
              NEW ARRIVAL ITEMS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TREANDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
