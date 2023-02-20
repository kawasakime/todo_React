import React from "react";

const NewNote = ({ addNote }) => {
  const [text, setText] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    text.length > 0 && addNote(text);
    setText("");
  };

  return (
    <form className="newNote">
      <input
        className="newNoteInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напиши здесь новую задачу..."
      />
      <button className="newNoteBtn" onClick={handleClick}>
        Добавить
      </button>
    </form>
  );
};

export default NewNote;
