import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Topics } from "./pages/Topics";
import { CreateArticle } from "./pages/CreateArticle";
import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";

function App() {
  return (
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
    </Routes>
  );
}

export default App;
