import React, { useState, useEffect } from "react";
import AppBar from "./appBar.jsx";
import SideNavBar from "./sideNavBar.jsx";
import Notes from "./addNotes.jsx";
import ShowNotes from "./showNotes.jsx";
import apiCalls from "../sevices/apiCalls.js";

export default function DashBoard() {
  const [isDrawerMin, setIsDrawerMin] = useState(true);
  const [allNotes, setAllNotes] = useState([]);

  const setListSize = () => {
    setIsDrawerMin(!isDrawerMin);
  };

  const expandList = (value) => {
    setIsDrawerMin(value);
  };

  const minifyList = (value) => {
    setIsDrawerMin(value);
  };

  useEffect(() => {
    apiCalls
      .getAllNotes(localStorage.getItem("id"))
      .then((res) => setAllNotes(res.data.data.data));
  }, []);
  return (
    <>
      <AppBar setListSize={setListSize} />
      <SideNavBar
        expandList={expandList}
        minifyList={minifyList}
        isDrawerMin={isDrawerMin}
      />
      <Notes allNotes={allNotes} setAllNotes={setAllNotes}/>
      <ShowNotes allNotes={allNotes}/>
    </>
  );
}
