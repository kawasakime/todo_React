import './App.css';
import React, {useState} from 'react'
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const removeNote = (note) => {
    setNotes(notes.filter(n => n.id !== note.id))
  }

  return (
    <div className="App">
      <div className="mainBlock">
        <NewNote create={createNote}/>
        <NoteList remove={removeNote} notes={notes}/>
        <Footer counter={notes.length}/>
      </div>
      
    </div>
  );
}

export default App;


