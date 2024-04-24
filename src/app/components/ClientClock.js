"use client";
import Clock from "react-live-clock";

const ClientClock = () => {
  return (
    <Clock
      className='bold font-1 text-xl'
      format={"HH:mm:ss a"}
      blinking
      ticking={true}
      noSsr
    />
  );
};

export default ClientClock;
