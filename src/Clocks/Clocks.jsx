import { useState } from 'react';

import { AddClockForm } from './AddClockForm';
import { ClockList } from './ClockList';

export const Clocks = () => {
  const [clocks, setClocks] = useState([]);

  const onClockAdd = (newClock) => {
    setClocks((prev) => [...prev, newClock]);
  };

  const onClockRemove = (id) => {
    const index = clocks.findIndex((elem) => elem.id === id);
    clocks.splice(index, 1);
    setClocks([...clocks]);
  };

  return (
    <div className="clocks_section">
      <AddClockForm onClockAdd={onClockAdd} />
      <ClockList clocks={clocks} onClockRemove={onClockRemove} />
    </div>
  );
};
