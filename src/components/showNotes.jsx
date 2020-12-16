import React, { useEffect, useState } from "react";
import CardAction from "./cardAction.jsx";
import noteServices from "../sevices/noteServices.js";
import EditNote from "./editNote";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import clsx from "clsx";
import "../style/showNotes.scss";

export default function DashBoardNotes(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [currentNoteDetails, setCurrentNoteDetails] = useState([]);
  // const [allTypeOfNotes, setAllTypeOfNotes] = useState([]);
  const [disabledEdit, setDisabledEdit] = useState(false);
  useEffect(() => {
    if (props.selectedMenu === "Trash") {
      setDisabledEdit(true);
    }
  }, [props.selectedMenu, setDisabledEdit]);

  const getCurrentNoteIndex = () => {
    return props.allNotes.findIndex(
      (note) => note.id === localStorage.getItem("currentNoteId")
    );
  };

  const addColor = (color) => {
    let colorNoteObject = {
      color: color,
      noteIdList: [localStorage.getItem("currentNoteId")],
    };
    noteServices
      .changeNoteColor(colorNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          let currentNoteIndex = getCurrentNoteIndex();
          let newNotesArray = [...props.allNotes];
          newNotesArray[currentNoteIndex] = {
            ...newNotesArray[currentNoteIndex],
            color: color,
          };
          props.setAllNotes(newNotesArray.reverse());
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("reached add color from shownote " + color);
  };

  const editNote = (note) => {
    localStorage.setItem("currentNoteId", note.id);
    console.log(note);
    setCurrentNoteDetails(note);
    console.log(currentNoteDetails);
    setIsEdit(true);
  };

  const deleteNote = () => {
    console.log("delete note reached :");
    let currentNoteIndex = getCurrentNoteIndex();
    let newNotesArray = [...props.allNotes];
    let deleteNoteObject = {
      isDeleted: !newNotesArray[currentNoteIndex].isDeleted,
      noteIdList: [localStorage.getItem("currentNoteId")],
    };
    noteServices
      .deleteNote(deleteNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          newNotesArray[currentNoteIndex].isDeleted = !newNotesArray[
            currentNoteIndex
          ].isDeleted;
          props.setAllNotes(newNotesArray.reverse());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNoteForever = () => {
    console.log("delete note reached :");
    let currentNoteIndex = getCurrentNoteIndex();
    let newNotesArray = [...props.allNotes];
    let deletedNoteForever = {
      noteIdList: [localStorage.getItem("currentNoteId")],
    };
    noteServices
      .deleteNoteForever(deletedNoteForever)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          newNotesArray.splice(currentNoteIndex, 1);
          props.setAllNotes(newNotesArray);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addArchiveStatus = () => {
    let currentNoteIndex = getCurrentNoteIndex();
    let newNotesArray = [...props.allNotes];
    let noteArchiveStatus = !newNotesArray[currentNoteIndex].isArchived;
    let archiveNoteObject = {
      isArchived: noteArchiveStatus,
      noteIdList: [localStorage.getItem("currentNoteId")],
    };
    noteServices
      .changeNoteArchiveStatus( archiveNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          newNotesArray[currentNoteIndex] = {
            ...newNotesArray[currentNoteIndex],
            isArchived: noteArchiveStatus,
          };
          props.setAllNotes(newNotesArray.reverse());
          if (isEdit) {
            setIsEdit(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const note = props.allNotes.reverse().map((note) => {
    return (
      <div
        className="each-note"
        key={note.id}
        onMouseEnter={() => localStorage.setItem("currentNoteId", note.id)}
        style={{ backgroundColor: note.color }}
      >
        <div className="note-body" onClick={() => editNote(note)}>
          <div className="note-titel">
            {note.title.length < 20
              ? note.title
              : note.title.slice(0, 20) + "..."}
          </div>
          <div className="note-description">
            {note.description.length < 400
              ? note.description
              : note.description.slice(0, 400) + "..."}
          </div>
        </div>
        <div className="note-footer">
          <CardAction
            class="note-actions-item-shownote"
            deleteNote={deleteNote}
            addColor={addColor}
            addArchiveStatus={addArchiveStatus}
            noteArchiveStatus={note.isArchived}
            selectedMenu={props.selectedMenu}
            deleteNoteForever={deleteNoteForever}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      {props.gridViewMode ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 360: 1, 500: 2, 750: 3, 1000: 5 }}
          className="ResponsiveMasonry"
        >
          <Masonry gutter="10px" className="Masonry">
            {note}
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <div className="display-notes-list-view">{note}</div>
      )}
      <EditNote
        deleteNote={deleteNote}
        currentNoteDetails={currentNoteDetails}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        allNotes={props.allNotes}
        setAllNotes={props.setAllNotes}
        addArchiveStatus={addArchiveStatus}
        isDisabledEdit={disabledEdit}
      />
    </>
  );
}
