import React from 'react';
import Note from './Note';

const NoteList = ({notes, remove}) => {
    return (
        <div className='notesList'>
            {notes.map(note => 
            <Note note={note} remove={remove} key={note.id}/>)}
        </div>
    );
};

export default NoteList;