import React, { useEffect, useState, lazy, Suspense } from "react";
import Loader from "./Loading.jsx";

const ShowNotes = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./showNotes.jsx")), 1000);
  });
});
export default function Archive(props) {
  const [note, setNote] = useState([]);
  useEffect(() => {
    setNote(props.allNotes.filter((note) => note.isArchived === true));
  }, [props.allNotes, setNote]);
  return (
    <>
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
