import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Weather from "./components/Weather";
import City from "./components/City";
import Inner from "./pages/Inner";
function App() {
  return (
    <div className="Apps">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inner />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/city" element={<City />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
