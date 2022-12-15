import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./styles/Home.global.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductForm from "./Component/ProductForm";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/upload" element={<ProductForm />}></Route>
        </Routes>
      </Router>

      <section class="footer">
        <div class="credit">
          {" "}
          Made with 💖 by <span>ILISH</span> 
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default App;
