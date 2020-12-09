import React, { lazy, PureComponent, Suspense } from "react";
import clsx from "clsx";
import AppBar from "./appBar.jsx";
import SideNavBar from "./sideNavBar.jsx";
import AddNotes from "./addNotes.jsx";
// import ShowNotes from "./showNotes.jsx";
import noteServices from "../sevices/noteServices.js";
import "../style/dashBoard.scss";
// const ShowNotes = lazy(() => import("./showNotes.jsx"));

const ShowNotes = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./showNotes.jsx")), 1000);
  });
});

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

  setAllNotes = (newNoteObject) => {
    this.setState({
      allNotes: [...newNoteObject],
    });
    console.log("come to set all note");
  }

  addNote = (noteObject) => {
    this.setAllNotes([...this.state.allNotes,noteObject]);
    console.log("reached addnote");
  };

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
          <div
            className={clsx("dashboard-body", {
              "sidenav-open": !this.state.isDrawerMin,
            })}
          >
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
                <Suspense fallback={<h1>Loading</h1>}>
                  <ShowNotes
                    allNotes={this.state.allNotes}
                    selectedMenu={this.state.selectedMenu}
                    setAllNotes={this.setAllNotes}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashBoard;
