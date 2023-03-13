import React from "react";
import Navbar from "./navbar";
import Topic from "./topic";
import Both from "./Bothfile";

export default function App() {
  // upper api part

  const [style, setstyle] = React.useState(true);

  const [searchform, setseachform] = React.useState("");

  const getdata = (data) => {
    setseachform(data);
  };

  const styles1 = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: "120px",
    marginRight: "-3px",
    fontSize: "10px",
    padding: "auto",
    position: "sticky",
    top: "0px",
  };
  const styles2 = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: "200px",
    marginRight: "30px",
  };

  function handleclick() {
    setstyle((prev) => !prev);
  }

  return (
    <div>
      <Navbar handleclick={handleclick} getdata={getdata} />
      <Topic style={style} />
      <Both
        styles1={styles1}
        styles2={styles2}
        style={style}
        searchform={searchform}
      />
    </div>
  );
}
