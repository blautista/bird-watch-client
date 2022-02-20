import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BirdDetails from "./pages/BirdDetails";
import MainPage from "./pages/MainPage";
import WelcomeScreen from "./pages/WelcomeScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          {/* <Route path="/birds" element={<MainPage />} /> */}
          <Route path="/birds" element={<BirdDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
