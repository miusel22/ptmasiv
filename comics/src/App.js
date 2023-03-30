import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Comics from "./components/Comics";
import Ratings from "./components/MyRatings";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Comics />} />
        <Route exact path="/my-ratings" element={<Ratings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




