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
    console.log("hello");
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
  }, [
    props.allNotes,
    props.selectedMenu,
    setAllTypeOfNotes,
    props.setAllNotes,
  ]);

  const editNote = (note) => {
    localStorage.setItem("currentNoteId", note.id);
    console.log(note);
    setCurrentNoteDetails(note);
    console.log(currentNoteDetails);
    setIsEdit(true);
  };

  const deleteNote = () => {
    console.log("delete note reached :");
    let currentNoteId = localStorage.getItem("currentNoteId");
    console.log("delete note reached :");
    let deleteNoteObject = {
      isDeleted: true,
      noteIdList: [currentNoteId],
    };
    noteServices
      .deleteNote(localStorage.getItem("id"), deleteNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          let currentNoteIndex = allTypeOfNotes.findIndex(
            (note) => note.id === currentNoteId
          );
          let newNotesArray = [...allTypeOfNotes];
          newNotesArray[currentNoteIndex].isDeleted = true;
          props.setAllNotes(newNotesArray);
          console.log(allTypeOfNotes);
          console.log(props.selectedMenu);
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
          let currentNoteIndex = allTypeOfNotes.findIndex(
            (note) => note.id === localStorage.getItem("currentNoteId")
          );
          let newNotesArray = [...allTypeOfNotes];
          newNotesArray[currentNoteIndex].color = color;
          props.setAllNotes(newNotesArray);
        }
      }).catch((error)=> {
        console.log(error);
      });
    console.log("reached add color from shownote " + color);
  };

  const note = allTypeOfNotes.reverse().map((note) => {
    return (
      <div
        className="each-note"
        key={note.id}
        onMouseEnter={() => localStorage.setItem("currentNoteId", note.id)}
        style={{backgroundColor: note.color}}
      >
        <div className="note-body" onClick={() => editNote(note)}>
          <div className="note-titel">{note.title}</div>
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
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="display-notes">{note}</div>
      <EditNote
        currentNoteDetails={currentNoteDetails}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        allNotes={props.allNotes}
        setAllNotes={props.setAllNotes}
      />
    </>
  );
}
