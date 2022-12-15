import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./styles/Home.global.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>

      <section class="footer">
        <div class="credit">
          {" "}
          Made with 💖 by <span>ILISH</span> | all rights reserved!{" "}
        </div>
      </section>
    </>
  );
};

export default App;
