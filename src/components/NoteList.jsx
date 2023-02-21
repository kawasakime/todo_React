import React from 'react';
import Note from './Note';

const NoteList = ({notes, remove, status}) => {
    return (
        <div className='notesList'>
            {notes.map(note => 
            <Note status={status} note={note} remove={remove} key={note.id}/>)}
        </div>
    );
};

export default NoteList;