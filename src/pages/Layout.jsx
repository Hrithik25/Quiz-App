import { Box, Button, Paper, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useRecoilState } from "recoil";
import { modeAtom } from "../recoil/atoms/modeAtom";
// import Home from "./Home";

const Layout = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  const changeMode = () => {
    setMode(mode === "dark" ? "" : "dark");
  };
  return (
    <div
      className={`${mode} bg-background transition-all ease-linear duration-100`}
    >
      <div className="h-screen items-center justify-start flex flex-col">
        <Paper
          elevation={0}
          square
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: mode === "dark" ? "black" : "white", // or '#000'
            color: mode === "dark" ? "white" : "black", // to make text readable
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2} sx={{ alignItems: "center" }}>
            <h1 className="text-4xl dark:text-white font-bold mb-8 mt-20">
              QUIZ APP
            </h1>

            <Box
              sx={{
                border: "2px solid ", // blue border
                borderRadius: "8px", // optional rounded corners
                padding: 2,
                width: "350px",
                // textAlign: "center",
              }}
            >
              <Outlet />
            </Box>

            <Button
              variant="contained"
              onClick={() => {
                changeMode();
              }}
              sx={{
                backgroundColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "black" : "white",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#f0f0f0" : "#222",
                },
                position: "fixed",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
              }}
            >
              {mode === "dark" ? (
                <LightModeIcon size={20} />
              ) : (
                <DarkModeIcon size={20} />
              )}
            </Button>
            {/* <Button
          className="absolute bottom-5 px-2 py-0"
          onClick={() => {
            changeMode();
          }}
        >
          {mode == "dark" ? (
            <MdLightMode size={20}></MdLightMode>
          ) : (
            <MdDarkMode size={20}></MdDarkMode>
          )}
        </Button> */}
          </Stack>
        </Paper>
      </div>
    </div>
  );
};

export default Layout;
