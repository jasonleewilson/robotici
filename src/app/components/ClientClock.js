"use client";
import Clock from "react-live-clock";

const ClientClock = () => {
  return (
    <Clock
      className='bold font-1 text-6xl text-red-400'
      format={"HH:mm:ss a"}
      blinking
      ticking={true}
      noSsr
    />
  );
};

export default ClientClock;
