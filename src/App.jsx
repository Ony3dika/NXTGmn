import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Landing/Home";
import "./index.css";
import Game from "./Pages/Home/Game";
import Loading from "./Pages/Landing/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {loading ? <Route element={<Loading />} path='/' /> : " "}
          <Route element={<Home />} path='/' />
          <Route element={<Game />} path='/Game' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
