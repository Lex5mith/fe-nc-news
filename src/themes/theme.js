
import {createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#90BE6D",
      },
      secondary: {
        main: "#CBA135",
      },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#2E3138",
      },
      secondary: {
        main: "#6C6F7D",
      },
      // info: {
      //   main: '#E0AFA0',
      // },
    },
  });