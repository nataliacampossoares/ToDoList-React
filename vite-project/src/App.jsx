import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import TasksProvider from "./contexts/TasksContext";
import Task from "./components/Body/Task";

function App() {
  return (
    <>
      <div className="bg-blueDark">
        <TasksProvider>
          <Header />
          <Body />
        </TasksProvider>
      </div>
    </>
  );
}

export default App;
