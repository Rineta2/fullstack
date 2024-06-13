import { Routes, Route } from "react-router-dom";

import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Home from "./components/UI/Home";
import Dashboard from "./auth/Dashboard";
import Login from "./auth/Login";

const disableHeader = ["/login", "/dashboard"];
const disableFooter = ["/login", "/dashboard"];
const App = () => {
  return (
    <main>
      {!disableHeader.includes(window.location.pathname) && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!disableFooter.includes(window.location.pathname) && <Footer />}
    </main>
  );
};

export default App;
