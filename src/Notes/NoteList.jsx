const NoteItem = ({ content, id, onRemove }) => {
  const onButtonClick = () => {
    onRemove(id);
  };

  return (
    <li className="note_item">
      <div className="note_content">{content}</div>
      <button className="note_remove-btn" type="button" onClick={onButtonClick}>
        ×
      </button>
    </li>
  );
};

export const NoteList = ({ notes, onRemove }) => {
  return (
    <ul className="note_list">
      {notes.map((props) => (
        <NoteItem {...props} onRemove={onRemove} key={props.id} />
      ))}
    </ul>
  );
};
