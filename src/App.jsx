import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen/homeScreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeScreen />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
