import React from 'react';
const Note = (props) => {
    return (
        <div className='note'>
            <div className="noteText">
                <input id={props.note.id} className='checkNote' type="checkbox"/>
                <label htmlFor={props.note.id} className='noteName'>{props.note.name}</label>
            </div>
            <button className="removeBtn"><img src="./assets/img/cross.svg" alt="" className='removeBtnImg' /></button>
        </div>
    );
};

export default Note;