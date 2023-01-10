import { useState } from "react";
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
