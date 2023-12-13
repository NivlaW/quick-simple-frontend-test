"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { listButton } from "./utils/constant";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/navigation";

export default function Home() {
  const [popup, setPopup] = useState(true);
  const [popOver, setPopOver] = useState(false);
  const [popOverType, setPopOverType] = useState(0);
  const [popOverInbox, setPopOverInbox] = useState(false);
  const [popOverTask, setPopOverTask] = useState(false);
  const [popOverBtnActive, setPopOverBtnActive] = useState(-1);
  const [listPopupButton, setlistPopupButton] = useState([]);
  const router = useRouter();

  // setlistPopupButton(listButton());

  // const toggleIsActive = (i) => {
  //   setPopOverBtnActive(i);
  // };
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

        <div className="flex flex-col flex-nowrap w-full justify-end content-end fixed bottom-0 right-0">
          <div></div>
          <div className="flex flex-row justify-end content-end flex-wrap items-center">
            <Link
              onClick={() => {
                // setPopup(!popup);
              }}
              href={"/main"}
              className={
                (popOver ? "bg-[#4F4F4F]" : "bg-[#2F80ED]") +
                " m-5 me-10 rounded-full p-5 aspect-square "
              }
            >
              <Image
                src={"/image/petir.svg"}
                className="aspect-square"
                width={30}
                height={30}
                alt={"petir"}
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
