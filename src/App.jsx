import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import NewContent from "./NewContent/NewContent";
import TopArticles from "./TopArticles/TopArticles";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <NewContent />
      <TopArticles />
    </>
  );
}

export default App;
