import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialMinutes }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (minutes >= 0) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer); // Stop the timer when it reaches 0
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [minutes, seconds]);

  return (
    <div className='timer'>
      <h3>Time:</h3>
      {minutes >= 0 && (
        <div>
          <p>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
      )}
      {minutes === 0 && seconds === 0 && <p>Time's up!</p>}
    </div>
  );
};

export default CountdownTimer;
