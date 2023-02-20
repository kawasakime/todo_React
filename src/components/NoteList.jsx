import React from 'react';
import Note from './Note';

const NoteList = ({props, notes}) => {
    return (
        <div className='notesList'>
            {notes.map(note => <Note note={note} key={note.id}/>)}
        </div>
    );
};

export default NoteList;