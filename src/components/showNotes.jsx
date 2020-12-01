import React, { useState } from "react";
import CardAction from "./cardAction.jsx";
import "../style/showNotes.scss";
// import EditNote from "./editNote";

export default function DashBoardNotes(props) {
  // const [isEdit, setIsEdit] = useState(false);
  // const [currentNoteId, setCurrentNoteId] = useState("");
  // const [currentNoteDetails, setCurrentNoteDetails] = useState([]);
  // const [allTypeOfNotes,setAllTypeOfNotes] = useState(props.allNotes);

  const editNote = (noteId) => {
    console.log(noteId);
    // setAllTypeOfNotes(props.allNotes);
    // props.allNotes.map((note) => {
    //   if (note.id === noteId) {
    //     setIsEdit(true);
    //     setCurrentNoteDetails(note);
    //     setCurrentNoteId(noteId);
    //   }
    // });
  };

  const note = props.allNotes.reverse().map((note) => {
    return (
      
        <div className="each-note" key={note.id} onClick={() => editNote(note.id)}>
          <div className="note-body">
            <div className="note-titel">
            {note.title}
            </div>
            <div className="note-description">
            {note.description.slice(0, 25)}
            <br/>
            {note.description.slice(26, 50)}
            <br/>
            {note.description.slice(51, 75)}
            </div>
          </div>
          <div className="note-footer">
          <CardAction class="note-actions-item-shownote"/>
          </div>
        </div>
    );
  });

  return (
    <>
      <div className="display-notes">
        {note}
      </div>
      {/* <EditNote
        currentNoteId={currentNoteId}
        currentNoteDetails={currentNoteDetails}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      /> */}
    </>
  );
}
