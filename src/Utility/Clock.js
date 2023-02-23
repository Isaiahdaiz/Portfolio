import '../App.css';
import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
// Update time every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="system-time">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    </div>
  );
}

export default Clock;