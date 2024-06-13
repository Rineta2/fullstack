import { Routes, Route } from "react-router-dom";

import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Home from "./components/UI/Home";
import Dashboard from "./auth/Dashboard";
import Login from "./auth/Login";
import Daftar from "./auth/Daftar";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
