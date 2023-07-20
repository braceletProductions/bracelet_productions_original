import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./scenes/Footer";
import HomeWrapper from "./components/HomeWrapper";
import Gallerys from "./components/Gallerys";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./scenes/Form";

function App() {
  return (

    <Router>
      <div className="app">
        <CssBaseline></CssBaseline>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/Gallery" element={<Gallerys/>} />
          <Route path="/details" element={<Form />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;