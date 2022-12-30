// client/src/components/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tes from './Tes'
import PageCount from './PageCount'

function App() {
  const [count, setCount] = useState(0);
  // checking commit
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/testing" element = { <Tes /> } />
          <Route path="/" element = { <PageCount count = {count} /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;