"use client";
import {
  Box,
  CircularProgress,
  Avatar,
  circularProgressClasses,
  Divider,
} from "@mui/material";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TaskPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="flex justify-between ms-12 flex-row items-center ">
        <Dropdown
          classNames={{
            base: "border-2 border-[#828282] rounded-lg bg-white focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none",
            content:
              "bg-transparent rounded-lg focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none hover:bg-0 text-black",
          }}
        >
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="rounded-md focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 border-2 appearance-none  focus:shadow-outline border-[#828282]"
            >
              My Task{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M14.5979 6.91248L10.7729 10.7291L6.94795 6.91248L5.77295 8.08748L10.7729 13.0875L15.7729 8.08748L14.5979 6.91248Z"
                  fill="#4F4F4F"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            classNames={{
              base: "rounded-md focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none hover:bg-0 text-black",
            }}
          >
            <DropdownItem
              className="rounded-md focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none hover:bg-transparent active:bg-transparent focus:bg-transparent"
              key="personal"
            >
              Personal Errands
            </DropdownItem>
            <DropdownItem
              className="rounded-md focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none hover:bg-transparent active:bg-transparent focus:bg-transparent"
              key="urgent"
            >
              Urgent To Do
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <button className="bg-[#2F80ED] text-white p-2 rounded-md">
          New Task
        </button>
      </div>
      {!isLoading ? (
        <div className="flex flex-col overflow-y-scroll ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => {
            return (
              <>
                <Link className="flex p-5" href="/main/inbox/detail">
                  <div className="flex w-full items-start justify-between gap-5">
                    <div className="flex gap-5 items-center">
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
                    <div className="flex flex-col items-end justify-end align-top">
                      <p className="mb-0 text-[#4F4F4F] text-sm">
                        21/09/2021 10:45
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
