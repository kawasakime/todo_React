import React from "react";
import Note from "./Note";

const NoteList = ({ notes, removeNote, changeNoteStatus }) => {
  return (
    <div className="notesList">
      {notes.map((item) => (
        <Note
          removeNote={removeNote}
          changeNoteStatus={changeNoteStatus}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default NoteList;
