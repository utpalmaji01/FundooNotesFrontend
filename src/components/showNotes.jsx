import React, { useEffect, useState } from "react";
import CardAction from "./cardAction.jsx";
import "../style/showNotes.scss";
import noteServices from "../sevices/noteServices.js";
import EditNote from "./editNote";

export default function DashBoardNotes(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [currentNoteDetails, setCurrentNoteDetails] = useState([]);
  const [allTypeOfNotes, setAllTypeOfNotes] = useState([]);

  useEffect(() => {
    console.log(props.allNotes);
    if (props.selectedMenu === "Notes") {
      setAllTypeOfNotes(
        props.allNotes.filter(
          (note) => note.isDeleted === false && note.isArchived === false
        )
      );
    }
    if (props.selectedMenu === "Trash") {
      setAllTypeOfNotes(
        props.allNotes.filter((note) => note.isDeleted === true)
      );
    }
    if (props.selectedMenu === "Archives") {
      setAllTypeOfNotes(
        props.allNotes.filter((note) => note.isArchived === true)
      );
    }
    console.log(props.allNotes);
  }, [props.allNotes, props.selectedMenu, setAllTypeOfNotes]);

  const getCurrentNoteIndex = () => {
    return props.allNotes.findIndex(
      (note) => note.id === localStorage.getItem("currentNoteId")
    );
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
      .deleteNote(localStorage.getItem("id"), deleteNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          newNotesArray[currentNoteIndex].isDeleted = !newNotesArray[currentNoteIndex].isDeleted;
          props.setAllNotes(newNotesArray.reverse());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addColor = (color) => {
    let colorNoteObject = {
      color: color,
      noteIdList: [localStorage.getItem("currentNoteId")],
    };
    noteServices
      .changeNoteColor(localStorage.getItem("id"), colorNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          let currentNoteIndex = getCurrentNoteIndex();
          let newNotesArray = [...props.allNotes];
          newNotesArray[currentNoteIndex] = {
            ...newNotesArray[currentNoteIndex],
            color: color,
          };
          props.setAllNotes(newNotesArray);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("reached add color from shownote " + color);
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
      .changeNoteArchiveStatus(localStorage.getItem("id"), archiveNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          newNotesArray[currentNoteIndex] = {
            ...newNotesArray[currentNoteIndex],
            isArchived: noteArchiveStatus,
          };
          props.setAllNotes(newNotesArray);
          if (isEdit) {
            setIsEdit(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const note = allTypeOfNotes.reverse().map((note) => {
    return (
      <div
        className="each-note"
        key={note.id}
        onMouseEnter={() => localStorage.setItem("currentNoteId", note.id)}
        style={{ backgroundColor: note.color }}
      >
        <div className="note-body" onClick={() => editNote(note)}>
          <div className="note-titel">{note.title.slice(0, 20)}</div>
          <div className="note-description">
            {note.description.slice(0, 25)}
            <br />
            {note.description.slice(26, 50)}
            <br />
            {note.description.slice(51, 75)}
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
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="display-notes">{note}</div>
      <EditNote
        deleteNote={deleteNote}
        currentNoteDetails={currentNoteDetails}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        allNotes={props.allNotes}
        setAllNotes={props.setAllNotes}
        addArchiveStatus={addArchiveStatus}
      />
    </>
  );
}
