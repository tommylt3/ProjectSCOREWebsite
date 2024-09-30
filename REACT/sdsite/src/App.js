import "./App.css";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
