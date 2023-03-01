import { Navigate,Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
