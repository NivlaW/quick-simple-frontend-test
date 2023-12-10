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
import { useEffect, useState } from "react";

export default function InboxPage() {
  const [isLoading, setIsLoading] = useState(false);
  //   const PopOverType = useRef();
  return (
    <>
      <input
        className="border mb-3 border-[#828282] rounded bg-transparent appearance-none focus:outline-none px-10 focus:shadow-outline w-full"
        type="search"
        name=""
        placeholder="Search"
        id=""
      />
      {!isLoading ? (
        <div className="flex flex-col overflow-y-scroll ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => {
            return (
              <>
                <Link className="flex p-5" href="/main/inbox/detail">
                  <div className="flex flex-cols-3 gap-5 items-center">
                    {x == 2 ? (
                      <div className="flex">
                        <Avatar>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z"
                              fill="black"
                              fill-opacity="0.54"
                            />
                          </svg>
                        </Avatar>
                        <Avatar
                          sx={{
                            marginInlineStart: "-1rem",
                            bgcolor: "#2F80ED",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z"
                              fill="white"
                              fill-opacity="0.54"
                            />
                          </svg>
                        </Avatar>
                      </div>
                    ) : (
                      <Avatar
                        sx={{
                          marginX: "0.7rem",
                          bgcolor: "#2F80ED",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z"
                            fill="white"
                            fill-opacity="0.54"
                          />
                        </svg>
                      </Avatar>
                    )}
                    <div className="flex flex-col">
                      <h5>
                        <b className="text-[#2F80ED]">Lisa baliom3 1100</b>
                      </h5>
                      <p className="mb-0 text-[#333] font-semibold">
                        cameron philips :
                      </p>
                      <p className="mb-0 text-[#4F4F4F] text-sm">
                        please check this out
                      </p>
                    </div>
                  </div>
                </Link>
                <Divider />
              </>
            );
          })}
        </div>
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
      )}
    </>
  );
}
