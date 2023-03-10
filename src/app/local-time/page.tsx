"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [hour, setHour] = useState<string | number>("00");
  const [min, setMin] = useState<string | number>("00");
  const [sec, setSec] = useState<string | number>("00");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [eventName, setEventName] = useState("REHEARSAL CLOCK");

  let interval: any;
  const updateTime = () => {
    const now = new Date().toTimeString().split(" ")[0].split(":");
    setHour(now[0]);
    setMin(now[1]);
    setSec(now[2]);
  };

  const toggleFullScreenHandler = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else document.body.requestFullscreen();

    setIsFullScreen(!isFullScreen);
  };

  const setEventNameHandler = () => {
    const newEventName = prompt("New Event Name") ?? "REHEARSAL CLOCK";
    localStorage.setItem("event-name", newEventName);
    setEventName(newEventName);
  };

  useEffect(() => {
    updateTime();
    clearInterval(interval);
    interval = setInterval(updateTime, 1000);
    const storedEventName = localStorage.getItem("event-name");
    if (storedEventName) setEventName(storedEventName);
  }, []);

  return (
    <>
      <div className="font-bold text-[30vh] flex justify-end text-left text-rose-700 leading-none ml-5">
        {hour}:{min}
        <div className="text-[13vh] pl-3 opacity-60 pt-[2.75vh]">{sec}</div>
      </div>

      <h2 className="absolute bottom-7 right-7 font-bold text-2xl">
        {eventName}
      </h2>

      <div className="flex flex-col absolute top-4 right-4 gap-1 opacity-30 hover:opacity-100 transition-opacity duration-500">
        <button
          className=" hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] text-rose-700 font-bold"
          onClick={toggleFullScreenHandler}
          title="Enter / Exit Full Screen"
        >
          <i className="bx bx-fullscreen" />
        </button>
        <button
          className=" hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] text-rose-700 font-bold"
          onClick={setEventNameHandler}
          title="Edit Event Name"
        >
          <i className="bx bx-edit" />
        </button>{" "}
        <a
          className=" hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] text-rose-700 font-bold"
          href="/"
        >
          <i className="bx bx-home" />
        </a>
      </div>
    </>
  );
}
