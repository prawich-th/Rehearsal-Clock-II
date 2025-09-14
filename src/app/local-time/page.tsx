"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [hour, setHour] = useState<string | number>("00");
  const [min, setMin] = useState<string | number>("00");
  const [sec, setSec] = useState<string | number>("00");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [eventName, setEventName] = useState("REHEARSAL CLOCK");

  const [color, setColor] = useState("text-rose-700");
  const [weight, setWeight] = useState("font-bold");
  const [narrowScreen, setNarrowScreen] = useState("absolute bottom-7 right-7");

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

  const setColorHandler = () => {
    setColor(color === "text-rose-700" ? "text-white" : "text-rose-700");
  };

  const setWeightHandler = () => {
    setWeight(weight === "font-bold" ? "font-normal" : "font-bold");
  };

  const setNarrowScreenHandler = () => {
    if (narrowScreen == "absolute bottom-7 right-7") {
      setNarrowScreen("absolute bottom-11 right-11");
    } else if (narrowScreen == "absolute bottom-11 right-11") {
      setNarrowScreen("absolute align-left pl-5");
    } else {
      setNarrowScreen("absolute bottom-7 right-7");
    }
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
      <div
        className={`${weight} text-[30vh] flex justify-end text-left ${color} leading-none ml-5 tracking-tight`}
      >
        {hour}:{min}
        <div className="text-[13vh] pl-3 opacity-60 pt-[2.75vh]">{sec}</div>
      </div>

      <h2
        className={`${narrowScreen} ${weight} text-2xl ${color} tracking-tight`}
      >
        {eventName}
      </h2>

      <div className="flex flex-col absolute top-4 right-4 gap-1 opacity-30 hover:opacity-100 transition-opacity duration-500">
        <button
          className={` hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] ${color} ${weight}`}
          onClick={toggleFullScreenHandler}
          title="Enter / Exit Full Screen"
        >
          <i className="bx bx-fullscreen" />
        </button>
        <button
          className={` hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] ${color} ${weight}`}
          onClick={setEventNameHandler}
          title="Edit Event Name"
        >
          <i className="bx bx-edit" />
        </button>{" "}
        <button
          className={` hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] ${color} ${weight}`}
          onClick={setColorHandler}
          title="Edit Color"
        >
          <i className="bx bx-color" />
        </button>{" "}
        <button
          className={` hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] ${color} ${weight}`}
          onClick={setWeightHandler}
          title="Edit Weight"
        >
          <i className="bx bx-bold" />
        </button>{" "}
        <button
          className={` hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] ${color} ${weight}`}
          onClick={setNarrowScreenHandler}
          title="Edit Narrow Screen"
        >
          <i className="bx bx-chevron-right" />
        </button>{" "}
        <Link
          className={` hover:scale-110 transition duration-200 ease-in-out text-[1.75rem] ${color} ${weight}`}
          href="/"
        >
          <i className="bx bx-home" />
        </Link>
      </div>
    </>
  );
}
