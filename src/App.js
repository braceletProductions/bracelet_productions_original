import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./scenes/Footer";
import HomeWrapper from "./components/HomeWrapper";
import Gallerys from "./components/Gallerys";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./scenes/Form";
import GotoTopBtn from "./scenes/GotoTopBtn";
import Flag from "./components/Flag/Flag";
import getCurrentDayAndMonth from "./utils/dayAndMonth";
import { useEffect, useState } from "react";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [wish, setWish] = useState("");

  useEffect(() => {
    const { day, month } = getCurrentDayAndMonth();
    if (day === 15 && month === 8) {
      setVisibility(true);
      setWish("Happy Independence Day");
    } else if (day === 26 && month === 1) {
      setVisibility(true);
      setWish("Happy Republic Day");
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <CssBaseline></CssBaseline>
        <Navbar></Navbar>
        {visibility ? <Flag wish={wish} /> : null}
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/Gallery" element={<Gallerys />} />
          <Route path="/details" element={<Form />} />
        </Routes>
        <Footer></Footer>
        <GotoTopBtn />
      </div>
    </Router>
  );
}

export default App;
