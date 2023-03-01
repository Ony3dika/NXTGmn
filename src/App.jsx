import { Navigate,Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./index.css";
import Game from "./Pages/Games/Game";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Game />} path='/Game' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
