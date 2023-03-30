import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Comics from "./components/Comics";
import Favorites from "./components/Favorites";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Comics />} />
        <Route exact path="/my-ratings" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




