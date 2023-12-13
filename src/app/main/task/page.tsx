"use client";
import { getTask } from "@/app/repository/TaskRepository";
import { testTask } from "@/app/utils/constant";
import {
  Box,
  CircularProgress,
  Avatar,
  circularProgressClasses,
  Divider,
  Collapse,
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
import { SetStateAction, Suspense, useEffect, useState } from "react";
import moment from "moment";

export default function TaskPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEror, setIsEror] = useState(false);
  const [open, setOpen] = useState(false);
  const [OpenValue, setOpenValue] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [listTask, setlistTask] = useState([]);

  const task = async () => {
    var data = await getTask();
    if (!data) {
      setIsLoading(isLoading);
    } else {
      setlistTask(data);
      setIsLoading(!isLoading);
    }
    // console.log(data)
  };

  useEffect(() => {
    task();
  }, []);
  const handleClick = (i: number) => {
    if (i) {
      if (open && OpenValue) {
        setOpenValue(i);
        setOpen(open);
      } else {
        setOpenValue(i);
        setOpen(!open);
      }
      setOpenValue(i);
      setOpen(!open);
    }
  };
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
        <div className="flex flex-col h-full overflow-y-scroll ">
          {listTask.map((x: any, i) => {
            var date2 = moment(x?.date).format("DD");
            var d = moment().format("DD");
            const ago = parseInt(date2) - parseInt(d);
            return (
              <>
                <div key={i} className="flex p-5 flex-col">
                  <button
                    onClick={() => {
                      handleClick(i);
                    }}
                    className="flex w-full flex-row-2 items-start align-top justify-between gap-5"
                  >
                    <div className="flex gap-5 items-center">
                      {x.is_checked == 1 ? (
                        <input
                          disabled
                          type="checkbox"
                          checked
                          className=""
                          name=""
                          id=""
                        />
                      ) : (
                        <input type="checkbox" name="" id="" />
                      )}
                      <p
                        className={
                          x.is_checked == 1
                            ? "mb-0 line-through text-[#4F4F4F] text-left font-semibold"
                            : "mb-0 text-[#4F4F4F] text-left font-semibold"
                        }
                      >
                        {x && x?.title}
                      </p>
                    </div>
                    <div className="flex gap-2 items-start justify-end align-top">
                      <p className="text-[#EB5757]">{ago} days ago</p>
                      <p>{x && moment(x?.date).format("DD/MM/YYYY")}</p>
                      <button className="px-2">
                        {i === OpenValue ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6.175 13.0875L10 9.27086L13.825 13.0875L15 11.9125L10 6.91253L5 11.9125L6.175 13.0875Z"
                              fill="#4F4F4F"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M13.825 6.91248L10 10.7291L6.175 6.91248L5 8.08748L10 13.0875L15 8.08748L13.825 6.91248Z"
                              fill="#4F4F4F"
                            />
                          </svg>
                        )}
                      </button>
                      <Dropdown
                        classNames={{
                          base: " border-none rounded-lg bg-white focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none",
                          content:
                            " bg-transparent rounded-lg focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none hover:bg-0 text-black",
                        }}
                      >
                        <DropdownTrigger>
                          <button className="py-2 rounded-md focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 border-2 appearance-none  focus:shadow-outline border-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="4"
                              viewBox="0 0 14 4"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                                fill="#828282"
                              />
                            </svg>
                          </button>
                        </DropdownTrigger>
                        <DropdownMenu
                          classNames={{
                            base: "rounded-md focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none hover:bg-0 text-[#EB5757]",
                          }}
                        >
                          <DropdownItem
                            className="rounded-md focus:outline-none outline-none active:outline-none focus:ring-0 ring-offset-0 focus:ring-offset-0 appearance-none hover:bg-transparent active:bg-transparent focus:bg-transparent"
                            key="personal"
                          >
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </button>
                  <Collapse
                    in={i === OpenValue || !open ? open : !open}
                    timeout="auto"
                    className="pt-2"
                    unmountOnExit
                  >
                    <div className="flex flex-col ms-5 gap-5">
                      <div className="flex flex-row">
                        <button className="p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.99199 1.66663C5.39199 1.66663 1.66699 5.39996 1.66699 9.99996C1.66699 14.6 5.39199 18.3333 9.99199 18.3333C14.6003 18.3333 18.3337 14.6 18.3337 9.99996C18.3337 5.39996 14.6003 1.66663 9.99199 1.66663ZM10.0005 16.6666C6.31715 16.6666 3.33382 13.6833 3.33382 9.99996C3.33382 6.31662 6.31715 3.33329 10.0005 3.33329C13.6838 3.33329 16.6672 6.31662 16.6672 9.99996C16.6672 13.6833 13.6838 16.6666 10.0005 16.6666ZM9.16699 5.83329H10.417V10.2083L14.167 12.4333L13.542 13.4583L9.16699 10.8333V5.83329Z"
                              fill="#2F80ED"
                            />
                          </svg>
                        </button>
                        <input
                          type="date"
                          value={x && moment(x?.date).format("YYYY-MM-DD")}
                          className="p-2 border border-[#828282] rounded-md appearance-none outline-none"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="flex flex-row items-center align-middle">
                        <button
                          className="p-3"
                          onClick={() => {
                            if (x == i) {
                              setIsEdit(false);
                            } else {
                              if (isEdit == true) {
                                setIsEdit(false);
                              } else {
                                setIsEdit(true);
                              }
                            }
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
                              fill="#2F80ED"
                            />
                          </svg>
                        </button>
                        {!isEdit ? (
                          <p className="mb-0"> {x && x.content}</p>
                        ) : (
                          <>
                            <textarea
                              name=""
                              id=""
                              // rows={auto}
                              className="w-full border break-words border-[#828282] rounded-md p-2 outline-none overflow-y-hidden h-full"
                            >
                              {x && x.content}
                            </textarea>
                          </>
                        )}
                      </div>
                    </div>
                  </Collapse>
                </div>
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
            Loading Task...
          </div>
        </div>
      )}
    </>
  );
}
