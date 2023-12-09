// "use client";
import {
  Box,
  CircularProgress,
  Avatar,
  circularProgressClasses,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetailInboxOverlay() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRead, setIsRead] = useState(5);
  const inAwait = async () => {
    var load = false;

    setIsLoading(load);
  };
  useEffect(() => {
    inAwait();
  }, []);
  return (
    <>
      <div className="sticky flex justify-end content-end m-5 ">
        <div className="flex flex-col w-1/3 h-[70dvh] bg-white rounded-md text-black ">
          <div className="flex p-5  items-center justify-between border-b ">
            <div className="flex">
              <button className="px-5">
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
            <button className="px-5">
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
          <div className="flex flex-col overflow-y-scroll h-full p-3">
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
                        <Divider className="text-sm">
                          Today June 09,2021
                        </Divider>
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
          {/* {!isLoading ? (
          ) : (
            <div className="flex justify-center h-full items-center">
              <div className="flex flex-col gap-3 justify-center items-center">
                <Box sx={{ position: "relative" }}>
                  <CircularProgress
                    variant="determinate"
                    sx={{
                      color: "#F8F8F8",
                    }}
                    size={40}
                    thickness={4}
                    value={100}
                  />
                  <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                      color: "#C4C4C4",
                      position: "absolute!important",
                      left: "0!important",
                      strokeLinecap: "round",
                    }}
                    size={40}
                    thickness={4}
                  />
                </Box>
                Loading Chats ...
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
