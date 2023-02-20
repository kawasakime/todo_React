import React from 'react';

const NewNote = (props) => {
    return (
        <form className='newNote'>
            <input className='newNoteInput' placeholder="Напиши здесь новую задачу..."/>
            <button className='newNoteBtn'>Добавить</button>
        </form>
    );
};

export default NewNote;