import React from "react";
import serach from "../images/10.search.png";
import bell from "../images/9.bell.png";
import data from "./data";

function Display() {
  return (
    <div className="Display">
      <div id="top">
        <div className="search">
          <img src={serach} alt="search" />
          <input placeholder="Search" />
        </div>

        <button className="bell">
          <img src={bell} alt="bell" />
          <div></div>
        </button>
      </div>

      <div id="middle">
        <p>Sales Information</p>
        <div>
          <div>
            <label>Customer</label>
            <input placeholder="Enter Costumer Name" />
          </div>
          <div>
            <label>Invoice ID</label>
            <input placeholder="Enter Invoice ID" />
          </div>
          <div>
            <label>Start Date</label>
            <input placeholder="Start Date" />
          </div>
          <div>
            <label>End Date</label>
            <input placeholder="End Date" />
          </div>
        </div>
      </div>

      <div id="bottom">
        <div id="heading">
          <input type="checkbox" />
          <div>
            <p>Invoice ID</p>
          </div>
          <div>
            <p>Date</p>
          </div>
          <div>
            <p>Customer</p>
          </div>
          <div>
            <p>Payable Amount</p>
          </div>
          <div>
            <p>Paid Amount</p>
          </div>
          <div>
            <p>Due</p>
          </div>
        </div>
        {data.map((value) => {
          return (
            <div className="data" key={value.id}>
              <input type="checkbox" />
              <div>
                <p className="blue">{value.id}</p>
              </div>
              <div>
                <p>{value.date}</p>
              </div>
              <div>
                <p>{value.customer}</p>
              </div>
              <div>
                <p>{value.payableAmount}</p>
              </div>
              <div>
                <p>{value.paidAmount}</p>
              </div>
              <div>
                <p>{value.due}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Display;
