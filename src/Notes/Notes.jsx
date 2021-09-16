import { useState, useEffect } from 'react';
import { NoteList } from './NoteList';
import { NewNoteForm } from './NewNoteForm';

export const Notes = () => {
  const NOTES_URL = 'https://ra-lifecycle-http.herokuapp.com/notes';

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(NOTES_URL)
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const onRemove = (id) => {
    fetch(`${NOTES_URL}/${id}`, { method: 'DELETE' }).then(() => {
      const filteredNotes = notes.filter((elem) => elem.id !== id);
      setNotes(filteredNotes);
    });
  };

  const onNoteAdd = (text) => {
    fetch(NOTES_URL, { method: 'POST', body: text })
      .then((response) => response.json())
      .then((data) => setNotes((prev) => [...prev, data]));
  };

  return (
    <div className="notes_section">
      <h2 className="notes_header">Notes</h2>
      <NoteList notes={notes} onRemove={onRemove} />
      <NewNoteForm onNoteAdd={onNoteAdd} />
    </div>
  );
};
