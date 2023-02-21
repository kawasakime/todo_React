import React, {useState} from 'react';

const NewNote = ({create, notes}) => {

    const [note, setNote] = useState("")

    const addNewNote = (e) => {
        e.preventDefault()
        if(note === "") {
            alert("Поле не должно быть пустым!")
        } else if (note.length > 60) {
            alert("Слишком длинное название задачи!")
            setNote("")
        } else {
            if(notes.length ===17) {
                alert("Нельзя добавить больше 17 записей!")
            } else {
            const newNote = {
                name: note, 
                id: Date.now(),
                status: true
            }
            create(newNote)
            setNote("")
        }
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