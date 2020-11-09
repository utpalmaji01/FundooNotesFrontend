import React, { useState } from "react";
import AppBar from "./appBar.jsx";
import SideNavBar from "./sideNavBar.jsx";
import Notes from "./notes.jsx";

export default function DashBoard() {
  const [isDrawerMin, setIsDrawerMin] = useState(true);

  const setListSize = () => {
    setIsDrawerMin(!isDrawerMin);
  };

  const expandList = (value) => {
    setIsDrawerMin(value);
  };

  const minifyList = (value) => {
    setIsDrawerMin(value);
  };
  return (
    <>
      <AppBar setListSize={setListSize} />
      <SideNavBar
        expandList={expandList}
        minifyList={minifyList}
        isDrawerMin={isDrawerMin}
      />
      <Notes />
    </>
  );
}
