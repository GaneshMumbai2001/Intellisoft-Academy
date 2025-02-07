import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar.jsx";
import Footer from "./Pages/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
