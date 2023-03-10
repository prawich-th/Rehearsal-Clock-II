import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="mb-3">
        <h1 className="text-3xl font-bold">Rehearsal Clock</h1>
        <h2>By @prawich.th</h2>
      </div>
      <div>
        <Link href="/local-time">
          <div className="p-2 text-white bg-rose-700 rounded-sm hover:-translate-y-1 transition-transform duration-300">
            Local Time
          </div>
        </Link>
      </div>
    </>
  );
}
