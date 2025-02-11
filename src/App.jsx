import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar.jsx";
import Footer from "./Pages/Footer.jsx";
import Demo from "../src/Components/Navbar/Demo.jsx";

function App() {
  return (
    <>
      <Demo/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
