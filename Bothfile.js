import React from "react";
import Main from "./main";
import SidebarMenu from "./sidebarMenu";

export default function Both(props) {
  const { style, styles1, styles2, searchform } = props;

  return (
    <div className="Both">
      <SidebarMenu style={style} styles1={styles1} styles2={styles2} />
      <Main style={style} searchform={searchform} />
    </div>
  );
}
