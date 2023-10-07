import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 52,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the time remaining
      const now = new Date();
      const targetDate = new Date('2023-12-31T23:59:59'); // Replace with your target date and time
      const timeRemaining = targetDate - now;

      // Update the countdown values
      setCountdown({
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      });

      // Check if the countdown has reached zero
      if (timeRemaining <= 0) {
        clearInterval(interval);
        // You can perform any action when the countdown reaches zero here.
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': countdown.days }}>{countdown.days}</span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': countdown.hours }}>{countdown.hours}</span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': countdown.minutes }}>{countdown.minutes}</span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': countdown.seconds }}>{countdown.seconds}</span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}

export default Countdown;
