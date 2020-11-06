import React, { useState } from "react";
import DashBoardHeader from "./dashBoardHeader.jsx";
import DashBoardSideNavBar from "./dashBoardSideNavBar";
import Notes from "./dashBoardNotes.jsx";
import "../style/dashBoard.scss";

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
      <DashBoardHeader setListSize={setListSize} />
      <DashBoardSideNavBar
        expandList={expandList}
        minifyList={minifyList}
        isDrawerMin={isDrawerMin}
      />
      <Notes />
    </>
  );
}
