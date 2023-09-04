import { useContext } from "react";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import { ModeContext } from "../contexts/Mode.jsx";

export const DefaultLayout = ({ children }) => {
  const { mode } = useContext(ModeContext);
  console.log(mode.palette);
  return (
    <>
      <NavBar />
      <Box
        sx={{
          padding: "4em",
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: mode.palette.backgroundColor,
        }}
      >
        {children}
      </Box>
    </>
  );
};
