import * as React from "react";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          paddingLeft: "4em",
          paddingRight: "4em",

          // width: 300,
          // height: 300,
          // backgroundColor: "primary.dark",
          // "&:hover": {
          //   backgroundColor: "primary.main",
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        {children}
      </Box>
    </>
  );
};
