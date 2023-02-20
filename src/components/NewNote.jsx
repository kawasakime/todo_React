import React, {useState} from 'react';

const NewNote = ({create}) => {

    const [note, setNote] = useState("")

    const addNewNote = (e) => {
        e.preventDefault()
        if(note.name === "") {
            alert("Поле не должно быть пустым!")
        } else {
            const newNote = {
                name: note, 
                id: Date.now()
            }
            create(newNote)
            setNote("")
        }
    }
    return (
        <form className='newNote'>
            <input className='newNoteInput' value={note} onChange={e => setNote(e.target.value)} placeholder="Напиши здесь новую задачу..."/>
            <button className='newNoteBtn' onClick={addNewNote}>Добавить</button>
        </form>
    );
};

export default NewNote;