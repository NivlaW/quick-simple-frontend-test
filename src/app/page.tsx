"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [popup, setPopup] = useState(true);
  return (
    <div className="flex w-full flex-row bg-[#333333]">
      <aside className="border-r border-[#F2F2F2] flex col-span-6 h-screen w-1/6 max-h-screen "></aside>
      <main className="flex w-full max-h-screen flex-col ">
        <div className="flex input-group items-center p-1 bg-[#4F4F4F]">
          <Image
            priority
            className="mx-2"
            src="/image/search.svg"
            width={20}
            height={20}
            alt="search"
          />
          <input
            type="search"
            className="bg-transparent appearance-none border-0 py-2.5 px-3 leading-tight focus:outline-none focus:border-0 focus:shadow-outline w-full"
            name=""
            id=""
          />
        </div>
        <div className="flex fixed bottom-0 right-0 flex-wrap items-center">
          <div
            className={
              "flex flex-row gap-5 transition-transform " +
              (popup && "translate-x-72")
            }
          >
            <div className="flex mb-5 items-center justify-center flex-col">
              <p className="mb-1 ">Task</p>
              <button className="bg-white rounded-full p-5 aspect-square ">
                <Image
                  src={"/image/task.svg"}
                  className="aspect-square"
                  width={25}
                  height={25}
                  alt={"task"}
                />
              </button>
            </div>
            <div className="flex  mb-5 items-center justify-center flex-col">
              <p className="mb-1 ">inbox</p>
              <button className="bg-white rounded-full p-5 aspect-square ">
                <Image
                  src={"/image/inbox.svg"}
                  className="aspect-square"
                  width={25}
                  height={25}
                  alt={"inbox"}
                />
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setPopup(!popup);
            }}
            className="bg-[#2F80ED] m-5 rounded-full relative z-10 p-5 aspect-square"
          >
            <Image
              src={"/image/petir.svg"}
              className="aspect-square"
              width={30}
              height={30}
              alt={"petir"}
            />
          </button>
        </div>
      </main>
    </div>
  );
}
