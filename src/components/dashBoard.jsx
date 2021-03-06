import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";

import clsx from "clsx";
import AppBar from "./appBar.jsx";
import SideNavBar from "./sideNavBar.jsx";
import Notes from "./notes.jsx";
import Trash from "./trashNotes.jsx";
import Archive from "./archiveNotes.jsx";
import Search from "./searchNotes.jsx";
import noteServices from "../sevices/noteServices.js";
import "../style/dashBoard.scss";

class DashBoard extends PureComponent {
  state = {
    isDrawerMin: true,
    allNotes: [],
    selectedMenu: "Notes",
    gridViewMode: true,
    searchNote: "",
  };

  setSearchNote = (searchKeywords) => {
    this.setState({
      searchNote: searchKeywords,
    });
  };

  setViewMode = () => {
    this.setState({
      gridViewMode: !this.state.gridViewMode,
    });
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
  };

  addNote = (noteObject) => {
    this.setAllNotes([...this.state.allNotes, noteObject]);
    console.log("reached addnote");
  };

  componentDidMount() {
    noteServices
      .getAllNotes()
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
            <AppBar
              setListSize={this.setListSize}
              gridViewMode={this.state.gridViewMode}
              setViewMode={this.setViewMode}
              setSelectedMenu={this.setSelectedMenu}
              setSearchNote={this.setSearchNote}
            />
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
                selectedMenu={this.state.selectedMenu}
                setSelectedMenu={this.setSelectedMenu}
              />
            </div>
            <div
              className={clsx("dashboard-notes", {
                "drawer-open": !this.state.isDrawerMin,
              })}
            >
              <div className="showNotes">
                <Switch>
                  <Route
                    path="/dashBoard/Notes"
                    component={() => (
                      <Notes
                        allNotes={this.state.allNotes}
                        addNote={this.addNote}
                        selectedMenu={this.state.selectedMenu}
                        setAllNotes={this.setAllNotes}
                        gridViewMode={this.state.gridViewMode}
                        searchNote={this.state.searchNote}
                      />
                    )}
                  />
                  <Route
                    path="/dashBoard/Trash"
                    component={() => (
                      <Trash
                        allNotes={this.state.allNotes}
                        selectedMenu={this.state.selectedMenu}
                        setAllNotes={this.setAllNotes}
                        gridViewMode={this.state.gridViewMode}
                        searchNote={this.state.searchNote}
                      />
                    )}
                  />
                  <Route
                    path="/dashBoard/Archives"
                    component={() => (
                      <Archive
                        allNotes={this.state.allNotes}
                        selectedMenu={this.state.selectedMenu}
                        setAllNotes={this.setAllNotes}
                        gridViewMode={this.state.gridViewMode}
                        searchNote={this.state.searchNote}
                      />
                    )}
                  />
                  <Route
                    path="/dashBoard/Search"
                    component={() => (
                      <Search
                        allNotes={this.state.allNotes}
                        selectedMenu={this.state.selectedMenu}
                        setAllNotes={this.setAllNotes}
                        gridViewMode={this.state.gridViewMode}
                        searchNote={this.state.searchNote}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashBoard;
