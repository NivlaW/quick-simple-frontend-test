"use client";
import {
  Box,
  CircularProgress,
  Avatar,
  circularProgressClasses,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailInboxPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRead, setIsRead] = useState(5);
  const router = useRouter();
  const inAwait = async () => {
    var load = false;

    setIsLoading(load);
  };
  useEffect(() => {
    inAwait();
  }, []);
  return (
    <>
      <div className="flex pb-3 items-center justify-between border-b ">
        <div className="flex">
          <button className="px-5" onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="#333333"
              />
            </svg>
          </button>
          <div className="flex ps-5 flex-col">
            <h5>
              <b className="text-[#2F80ED] text-md">Lisa baliom3 1100</b>
            </h5>
            <p className="mb-0 text-[#333] font-semibold text-xs">
              3 Participan
            </p>
          </div>
        </div>
        <button className="px-5" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="#333333"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col-reverse overflow-y-scroll h-full p-3">
        <div className="flex flex-col ">
          {[1, 2, 3, 4, 5].map((x, i) => {
            return (
              <>
                {x == 1 || x == 3 ? (
                  <>
                    <div className="py-2 flex flex-col justify-end items-end align-middle">
                      <div className="max-w-sm ">
                        <p className="text-right text-[#9B51E0] font-semibold">
                          You
                        </p>
                        <div className="flex flex-col p-3 rounded-lg bg-[#EEDCFF] text-left">
                          <p className="text-sm whitespace-pre-line">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                          <p className="mt-1 text-sm">19.32</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 pb-0">
                      <Divider className="text-sm">Today June 09,2021</Divider>
                    </div>
                  </>
                ) : x == 5 ? (
                  <>
                    <div className="p-5 pb-0">
                      <Divider
                        sx={{
                          borderColor: "#EB5757",
                          color: "#EB5757",
                        }}
                        className="text-sm text-[#EB5757]"
                      >
                        New Message
                      </Divider>
                    </div>
                    <div className="py-2 flex flex-col justify-center items-start align-middle">
                      <div className="max-w-sm ">
                        <p className="text-left text-[#43B78D] font-semibold">
                          Lisa
                        </p>
                        <div className="flex flex-col p-3 rounded-lg bg-[#D2F2EA] text-left">
                          <p className="text-sm whitespace-pre-line">
                            oekeoekeoeke
                          </p>
                          <p className="mt-1 text-sm">19.32</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="py-2 flex flex-col justify-center items-start align-middle">
                      <div className="max-w-sm ">
                        <p className="text-left text-[#E5A443] font-semibold">
                          Lisa
                        </p>
                        <div className="flex flex-col p-3 rounded-lg bg-[#FCEED3] text-left">
                          <p className="text-sm whitespace-pre-line">sure</p>
                          <p className="mt-1 text-sm">19.32</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="flex px-3 gap-2 items-center  align-middle justify-center">
        <input
          type="text"
          placeholder="Type a new message"
          className="w-full border leading-none border-[#828282] rounded-md p-2 bg-transparent appearance-none focus:outline-none focus:shadow-outline"
        />
        <button className="bg-[#2F80ED] text-white p-2 rounded-md">Send</button>
      </div>
    </>
  );
}