"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import InboxOverlay from "../components/inbox/InboxOverlay";
// import TaskOverlay from "../components/task/TaskOverlay";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/navigation";
import DetailInboxOverlay from "@/components/inbox/DetailInboxOverlay";
import { listButton } from "../utils/constant";

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <>
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
            <div>
              {popOver && (
                <div className="sticky flex justify-end content-end m-5 ">
                  <div className="flex flex-col p-3 w-1/3 h-[70dvh] bg-white rounded-md text-black ">
                    {children}
                    {/* {popOverType == 1 ? (
                    <InboxOverlay />
                  ) : // <DetailInboxOverlay />
                  popOverType == 2 ? (
                    <TaskOverlay />
                  ) : (
                    ""
                  )} */}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-end content-end flex-wrap items-center">
              <div
                className={
                  "flex  gap-5 transition-transform " +
                  (popOver
                    ? " translate-x-24 relative z-20"
                    : popOverBtnActive == 1
                    ? " translate-x-24 relative z-20 flex-row-reverse"
                    : "")
                }
              >
                {listButton.map((x, i) => (
                  <div
                    key={i}
                    className={
                      "flex items-center justify-center flex-col " +
                      (!popOver ? "mb-5" : "my-5")
                    }
                  >
                    {!popOver && <p className="mb-1 ">{x?.teks}</p>}
                    <button
                      // href={x.href == 1 ? "/inbox" : "/main/task"}
                      onClick={() => {
                        if (x.href == 1) {
                          router.push("/main/inbox");
                        } else {
                          router.push("/main/task");
                        }
                        if (x.href == popOverType) {
                          setPopOver(true);
                        }
                        if (popOverType == x.href) {
                          setPopOverBtnActive(-1);
                          setPopOver(false);
                          setPopOverInbox(true);
                          setPopOverTask(true);
                        } else {
                          setPopOverBtnActive(i);
                          setPopOver(true);
                          setPopOverInbox(false);
                          setPopOverTask(false);
                        }
                        // setPopOver(!popOver);
                        setPopOverType(x.href);
                      }}
                      className={` rounded-full p-5 aspect-square `}
                      style={{
                        backgroundColor:
                          popOverBtnActive == i
                            ? x?.background?.active
                            : x?.background?.nonactive,
                      }}
                    >
                      {popOverBtnActive == i
                        ? ReactHtmlParser(x.icon?.active)
                        : ReactHtmlParser(x?.icon?.nonactive)}
                    </button>
                  </div>
                ))}

                {/* <div
                className={
                  "flex items-center justify-center flex-col " +
                  (!popOver ? "mb-5" : "my-5")
                }
              >
                {!popOver && <p className="mb-1 ">inbox</p>}
                <button
                  onClick={(i) => {
                    setPopOver(!popOver);
                  }}
                  className="bg-white rounded-full p-5 aspect-square "
                >
                  <Image
                    src={"/image/inbox.svg"}
                    className="aspect-square"
                    width={25}
                    height={25}
                    alt={"inbox"}
                  />
                </button>
              </div> */}
              </div>
              <button
                onClick={() => {
                  router.back();
                  // setPopup(!popup);
                }}
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
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
