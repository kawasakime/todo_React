import './App.css';
import React, {useState} from 'react'
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([
    {id:1, name:"Lorem ipsum dolor sit amet consectetur."},
    {id:2, name:"Lorem ium dolor sit amet consectetur."},
    {id:3, name:"Lorem ipsum dolor sit amet consectetur."}
  ])

  return (
    <div className="App">
      <div className="mainBlock">
        <NewNote/>
        <NoteList notes={notes}/>
        <Footer counter={notes.length}/>
      </div>
      
    </div>
  );
}

export default App;
