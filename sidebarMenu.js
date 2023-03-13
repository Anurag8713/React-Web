import React from "react";

export default function sidebarMenu(props) {
  const { style, styles1, styles2 } = props;

  const styles3 = {
    display: "flex",
    height: "40px",
    border: "none",
  };

  const styles4 = {
    display: "inline-flex",
  };

  const style5 = {
    display: "none",
  };

  const style6 = {
    borderBottom: "solid lightgrey 1px",
  };

  const style7 = {
    borderBottom: "none",
  };

  return (
    <div className="menu" style={style ? styles1 : styles2}>
      <div className="menu1" style={style ? style7 : style6}>
        <div className="items1">
          <i
            className="home icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Home
          </label>
        </div>
        <div className="items2">
          <i
            className="play circle outline icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Shorts
          </label>
        </div>
        <div className="items3">
          <i
            className="server icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Subscription
          </label>
        </div>
      </div>

      <div className="menu2" style={style ? style5 : styles4}>
        <div className="items4">
          <i
            className="video icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Library
          </label>
        </div>
        <div className="items5">
          <i
            className="history icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            History
          </label>
        </div>
        <div className="items6">
          <i
            className="clock icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Your videos
          </label>
        </div>
        <div className="items7">
          <i
            className="clock outline icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Watch later
          </label>
        </div>
        <div className="item8">
          <i
            className="thumbs up outline icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Liked videos
          </label>
        </div>
        <div className="items9">
          <i
            className="indent icon"
            style={{ marginRight: "20px", fontSize: "20px" }}
          ></i>
          <label className="text" style={style ? styles3 : styles4}>
            Hit song
          </label>
        </div>
      </div>

      <div className="menu3" style={style ? style5 : styles3}>
        <h6 style={{ marginLeft: "-10px", marginBottom: "0px" }}>
          <label className="text" style={style ? styles3 : styles4}>
            Subscription
          </label>
        </h6>
        <div>
          <img src="./images/image18.jpg" className="menuimg" />
          <label className="text" style={style ? styles3 : styles4}>
            Testbook Super
          </label>
        </div>
        <div>
          <img src="./images/image19.jpg" className="menuimg" />
          <label className="text" style={style ? styles3 : styles4}>
            Gate Academy
          </label>
        </div>
        <div>
          <img src="./images/image20.jpg" className="menuimg" />
          <label className="text" style={style ? styles3 : styles4}>
            Shemaroo
          </label>
        </div>
        <div>
          <img src="./images/image21.jpg" className="menuimg" />
          <label className="text" style={style ? styles3 : styles4}>
            Suyash Aswal
          </label>
        </div>
        <div>
          <img src="./images/image22.jpg" className="menuimg" />
          <label className="text" style={style ? styles3 : styles4}>
            T-series
          </label>
        </div>
        <div>
          <img src="./images/image23.jpg" className="menuimg" />
          <label className="text" style={style ? styles3 : styles4}>
            Geet mp3
          </label>
        </div>
        <div>
          <img src="./images/image24.jpg" className="menuimg" />
          <label className="text" style={style ? styles3 : styles4}>
            Mankrit Aulakh
          </label>
        </div>
      </div>
    </div>
  );
}
