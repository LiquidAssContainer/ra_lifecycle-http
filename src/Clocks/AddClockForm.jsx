import { nanoid } from 'nanoid';
import { useState } from 'react';
import { convertTimezoneOffset } from './utils';

const Input = ({ name, onInputChange }) => {
  const inputNames = {
    title: 'Название',
    offset: 'Временная зона',
  };

  return (
    <label className="add-clock_label">
      <span className="add-clock_input-title">{inputNames[name]}</span>
      <input
        type="text"
        className="add-clock_input"
        name={name}
        onChange={onInputChange}
      />
    </label>
  );
};

export const AddClockForm = ({ onClockAdd }) => {
  const INITIAL_FORM = {
    title: '',
    offset: '',
  };

  const [formData, setFormData] = useState(INITIAL_FORM);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, offset } = formData;
    const id = nanoid();
    const timezoneOffset = convertTimezoneOffset(offset);
    onClockAdd({ title, timezoneOffset, id });
  };

  return (
    <form className="add-clock-form" onSubmit={onSubmit}>
      <Input name="title" onInputChange={onInputChange} required />
      <Input name="offset" onInputChange={onInputChange} required />
      <button type="submit" className="submit-btn">
        Добавить
      </button>
    </form>
  );
};
