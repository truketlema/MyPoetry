import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import PoetryOverview from "./Pages/PoetryOverview";
import SinglePoem from "./Pages/SinglePoem";
import Feelings from "./Pages/Feelings";
import Spritual from "./Pages/Spritual";
import Romance from "./Pages/Romance";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
