import * as React from "react";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          padding: "4em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </>
  );
};
