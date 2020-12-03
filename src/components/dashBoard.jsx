import React, { PureComponent } from "react";
import clsx from "clsx";
import AppBar from "./appBar.jsx";
import SideNavBar from "./sideNavBar.jsx";
import AddNotes from "./addNotes.jsx";
import ShowNotes from "./showNotes.jsx";
import noteServices from "../sevices/noteServices.js";
import "../style/dashBoard.scss";

class DashBoard extends PureComponent {
  state = {
    isDrawerMin: true,
    allNotes: [],
    selectedMenu: "Notes",
  };

  setSelectedMenu = (value) => {
    this.setState({
      selectedMenu: value,
    });
  };

  setListSize = () => {
    this.setState({
      isDrawerMin: !this.state.isDrawerMin,
    });
  };

  addNote = (noteObject) => {
    this.setState({
      allNotes: [...this.state.allNotes, noteObject],
    });
  }

  componentDidMount() {
    noteServices
      .getAllNotes(localStorage.getItem("id"))
      .then((responce) => {
        console.log(responce);
        this.setState({
          allNotes: responce.data.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("some error occour");
      });
  }

  componentDidUpdate() {
    console.log(this.state.selectedMenu);
  }

  render() {
    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-header">
            <AppBar setListSize={this.setListSize} />
          </div>
          <div className="dashboard-body">
            <div className="dashboard-sideNavBar">
              <SideNavBar
                expandList={this.expandList}
                minifyList={this.minifyList}
                isDrawerMin={this.state.isDrawerMin}
                setSelectedMenu={this.setSelectedMenu}
              />
            </div>
            <div
              className={clsx("dashboard-notes", {
                "drawer-open": !this.state.isDrawerMin,
              })}
            >
              <div className="addAnyNotes">
                <AddNotes
                  allNotes={this.state.allNotes}
                  addNote={this.addNote}
                />
              </div>
              <div className="showNotes">
                <ShowNotes
                  allNotes={this.state.allNotes}
                  selectedMenu={this.state.selectedMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashBoard;
