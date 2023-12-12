import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
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
          Loading Chats ...
        </div>
      </div>
    </>
  );
}
