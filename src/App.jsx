import "./App.css";
import React from "react";
import NoteList from "./components/NoteList";
import NewNote from "./components/NewNote";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = React.useState([]);
  // all \ completed \ active
  const [filter, setFilter] = React.useState("all");

  // удаление задачи
  const removeNote = (id) => {
    setNotes((prev) => {
      const index = prev.findIndex((item) => item.id === id);

      const newNotes = [...prev.slice(0, index), ...prev.slice(index + 1)];

      return newNotes.map((item, i) => ({ ...item, id: i }));
    });
  };

  // добавление задачи
  const addNote = (text) => {
    setNotes((prev) => [
      ...prev,
      { id: prev.length, text: text, completed: false },
    ]);
  };

  // изменение статуса задачи
  const changeNoteStatus = (id) => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // фильтрация задач
  const filteredNotes = () =>
    notes.filter((item) => {
      if (filter === "all") return item;

      return filter === "completed" ? item.completed : !item.completed;
    });

  return (
    <div className="App">
      <div className="mainBlock">
        <NewNote addNote={addNote} />
        <NoteList
          notes={filteredNotes()}
          removeNote={removeNote}
          changeNoteStatus={changeNoteStatus}
        />
        {notes.length > 0 && (
          <Footer
            currentFilter={filter}
            setFilter={setFilter}
            counter={filteredNotes().length}
          />
        )}
      </div>
    </div>
  );
}

export default App;
