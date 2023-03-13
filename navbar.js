import React from "react";
import img from "./images/image10.jpg";
import img1 from "./images/image9.jpg";

export default function Navbar(props) {
  let valuesearch;
  const finditem = (e) => {
    valuesearch = e.target.value;
    props.getdata(valuesearch);
    return valuesearch;
  };

  return (
    <div className="Navbar">
      <div className="item1">
        <i
          className="fi fi-rr-menu-burger"
          style={{ marginTop: "10px", fontSize: "18px" }}
          onClick={props.handleclick}
        ></i>
      </div>
      <div className="item2">
        <img
          src={img}
          style={{ width: "100px", marginBottom: "7px", marginLeft: "20px" }}
        />
      </div>
      <div className="item3 Search-item">
        <input
          type="text"
          placeholder="Search"
          className="search"
          name="text"
          onChange={finditem}
        ></input>
        <div className="empty-box"></div>
        <i className="fi fi-rr-search"></i>
      </div>
      <div className="item4">
        <i className="fi fi-rr-microphone"></i>
      </div>
      <div className="item5">
        <i class="fi fi-rr-video-plus" style={{ fontSize: "20px" }}></i>
      </div>
      <div className="item6">
        <i className="fi fi-rr-bell" style={{ fontSize: "20px" }}></i>
      </div>
      <div className="item7">
        <img src={img1} style={{ width: "30px" }} />
      </div>
    </div>
  );
}
