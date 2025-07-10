import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import PoetryOverview from "./Pages/PoetryOverview";
import SinglePoem from "./Pages/SinglePoem";
import Feelings from "./Pages/Feelings";
import Spritual from "./Pages/Spritual";
import Romance from "./Pages/Romance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<PoetryOverview />} />
        <Route path="/poem/:id" element={<SinglePoem />} />
        <Route path="/feelings" element={<Feelings />}></Route>
        <Route path="/spritual" element={<Spritual />}></Route>
        <Route path="/romance" element={<Romance />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
