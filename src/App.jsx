import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";
import { Topics } from "./pages/Topics";
import LogInPage from "./pages/Login";
import { CreateArticle } from "./pages/CreateArticle";
import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ModeContext } from "./contexts/Mode.jsx";
import { SingleArticle } from "./pages/SingleArticle";

function App() {
  const { mode } = useContext(ModeContext);
  return (
    <ThemeProvider theme={mode}>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/topics"
          element={
            <DefaultLayout>
              <Topics />
            </DefaultLayout>
          }
        />
        <Route
          path="/create-article"
          element={
            <DefaultLayout>
              <CreateArticle />
            </DefaultLayout>
          }
        />
        <Route
          path="/login"
          element={
            <DefaultLayout>
              <LogInPage />
            </DefaultLayout>
          }
        />
          <Route
          path="/articles/:article_id"
          element={
            <DefaultLayout>
              <SingleArticle 
             
              />
            </DefaultLayout>
          }
        />
      </Routes>

    </ThemeProvider>
  );
}

export default App;
