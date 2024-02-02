import React from "react";
import Login from "./LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import Upload from "./UploadPage/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;
