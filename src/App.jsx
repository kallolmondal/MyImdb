import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MovieBanner from "./Components/MovieBanner/MovieBanner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";

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
