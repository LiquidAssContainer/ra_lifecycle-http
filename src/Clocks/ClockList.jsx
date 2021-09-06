import { useEffect, useRef, useState } from 'react';

const Clock = ({ title, id, timezoneOffset, onClockRemove }) => {
  let interval;
  const hourHand = useRef(null);
  const minuteHand = useRef(null);
  const secondHand = useRef(null);
  const [handDegrees, setHandDegrees] = useState({});

  useEffect(() => {
    interval = setInterval(() => {
      const date = new Date();
      date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
      const dateWithOffset = new Date(date.getTime() + timezoneOffset * 60000);

      const seconds = dateWithOffset.getSeconds() * 6;
      const minutes = dateWithOffset.getMinutes() * 6 + seconds / 60;
      const hours = dateWithOffset.getHours() * 30 + minutes / 12;
      setHandDegrees({ hours, minutes, seconds });
    }, 90);
  });

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  });

  const onClick = () => {
    onClockRemove(id);
  };

  return (
    <li className="clock_container">
      <h5 className="clock_title">{title}</h5>
      <button className="clock_remove-btn" onClick={onClick}>
        ×
      </button>
      <div className="clock_face">
        <div
          className="clock_hand hour-hand"
          style={{ transform: `rotate(${handDegrees.hours}deg)` }}
          ref={hourHand}
        ></div>
        <div
          className="clock_hand minute-hand"
          style={{ transform: `rotate(${handDegrees.minutes}deg)` }}
          ref={minuteHand}
        ></div>
        <div
          className="clock_hand second-hand"
          style={{ transform: `rotate(${handDegrees.seconds}deg)` }}
          ref={secondHand}
        ></div>
      </div>
    </li>
  );
};

export const ClockList = ({ clocks, onClockRemove }) => {
  return (
    <ul className="clock_list">
      {clocks.map(({ title, timezoneOffset, id }) => (
        <Clock
          title={title}
          id={id}
          timezoneOffset={timezoneOffset}
          onClockRemove={onClockRemove}
          key={id}
        />
      ))}
    </ul>
  );
};
