import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import PoetryOverview from "./Pages/PoetryOverview";
import SinglePoem from "./Pages/SinglePoem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<PoetryOverview />} />
        <Route path="/poetry" element={<SinglePoem />}></Route>
      </Routes>
    </>
  );
}

export default App;
