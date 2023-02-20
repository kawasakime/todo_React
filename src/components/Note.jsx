import React from "react";

const Note = ({ item, removeNote, changeNoteStatus }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    removeNote(id);
  };

  return (
    <div className="note">
      <div className="noteText">
        <input
          checked={item.completed}
          id={item.id}
          className="checkNote"
          type="checkbox"
          onChange={() => changeNoteStatus(item.id)}
        />
        <label htmlFor={item.id} className="noteName">
          {item.text}
        </label>
      </div>
      <button className="removeBtn" onClick={(e) => handleClick(e, item.id)}>
        <img src="./assets/img/cross.svg" alt="" className="removeBtnImg" />
      </button>
    </div>
  );
};

export default Note;
