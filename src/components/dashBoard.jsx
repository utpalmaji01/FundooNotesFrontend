import React, { PureComponent } from "react";
import AppBar from "./appBar.jsx";
import SideNavBar from "./sideNavBar.jsx";
import AddNotes from "./addNotes.jsx";
import ShowNotes from "./showNotes.jsx";
import noteServices from "../sevices/noteServices.js";

class DashBoard extends PureComponent {
  state = {
    isDrawerMin: true,
    allNotes: [],
    selectedMenu: "Notes",
  };

  setListSize = () => {
    this.setState({
      isDrawerMin: !this.state.isDrawerMin,
    });
  };

  expandList = (value) => {
    this.setState({
      isDrawerMin: value,
    });
  };

  minifyList = (value) => {
    this.setState({
      isDrawerMin: value,
    });
  };

  componentDidMount() {
    noteServices
      .getAllNotes(localStorage.getItem("id"))
      .then((responce) => {
        this.setState({
          allNotes: responce.data.data.data,
        });
      })
      .catch((error) => {
        console.log("some error occour");
      });
  }

  render() {
    return (
        <>
          <AppBar setListSize={this.setListSize} />
          <SideNavBar
            expandList={this.expandList}
            minifyList={this.minifyList}
            isDrawerMin={this.state.isDrawerMin}
            setSelectedMenu={this.setSelectedMenu}
          />
          <AddNotes allNotes={this.state.allNotes} setAllNotes={this.setAllNotes} />
          <ShowNotes allNotes={this.state.allNotes} selectedMenu={this.state.selectedMenu} />
        </>
      );
  }
}

export default DashBoard;
