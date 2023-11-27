import React, { useEffect } from "react";
import alertSound from './audio.mp3';

const AlertWithAudio = () => {
  useEffect(() => {
    let alertInterval;
    let iterations = 1; 
    let count = 0;

    alertInterval = setInterval(() => {
      playAudio();
      count++;

      if (count === iterations) {
        clearInterval(alertInterval);
      }
    }, 2000);

    return () => {
      clearInterval(alertInterval);
    };
  }, []);

  const playAudio = () => {
    let audio = new Audio(alertSound);
    audio.play();
  };

  return (
    <div>
      <h1>Moye Moye</h1>
    </div>
  );
};

export default AlertWithAudio;
