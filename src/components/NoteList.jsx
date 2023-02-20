import React from "react";
import Note from "./Note";

const NoteList = (props) => {
  const { notes, ...rest } = props;

  return (
    <div className="notesList">
      {notes.map((item) => (
        <Note {...rest} item={item} key={item.id} />
      ))}
    </div>
  );
};

export default NoteList;
