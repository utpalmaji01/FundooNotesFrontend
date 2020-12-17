import React, { useEffect, useState, lazy, Suspense } from "react";
import AddNotes from "./addNotes.jsx";
import Loader from "./Loading.jsx";

const ShowNotes = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./showNotes.jsx")), 3000);
  });
});
export default function Notes(props) {
  const [note, setNote] = useState([]);
  useEffect(() => {
    setNote(
      props.allNotes.filter(
        (note) => note.isDeleted === false && note.isArchived === false
      )
    );
  }, [props.allNotes, setNote]);
  return (
    <>
      <div className="addAnyNotes">
        <AddNotes allNotes={props.allNotes} addNote={props.addNote} />
      </div>
      <Suspense fallback={<Loader />}>
        <ShowNotes
          allNotes={props.allNotes}
          filterNotes={note}
          selectedMenu={props.selectedMenu}
          setAllNotes={props.setAllNotes}
          gridViewMode={props.gridViewMode}
          searchNote={props.searchNote}
        />
      </Suspense>
    </>
  );
}
