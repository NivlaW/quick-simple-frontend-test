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
import InboxPage from "./inbox/page";
import TaskPage from "./task/page";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
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
          Loading
        </div>
      </div>
    </>
  );
}
