import { useState } from 'react';

export const NewNoteForm = ({ onNoteAdd }) => {
  const [noteText, setNoteText] = useState('');

  const onTextareaChange = ({ target: { value } }) => {
    setNoteText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onNoteAdd(noteText);
    setNoteText('');
  };

  return (
    <div className="form_container">
      <h3 className="form_header">New note</h3>
      <form className="add-note-form" onSubmit={onSubmit}>
        <div className="textarea_container">
          <textarea
            className="add-note_textarea"
            onChange={onTextareaChange}
            value={noteText}
            required
          />
          <button type="submit" className="add-note-btn">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
