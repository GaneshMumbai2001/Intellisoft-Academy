import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar.jsx";
import NavbarUpdate from "../src/Components/Navbar/NavbarUpdate.jsx";
import Footer from "./Pages/Footer.jsx";
// import Demo from "../src/Components/Navbar/Demo.jsx";
import Nav from "../src/Components/Navbar/Nav.jsx";
function App() {
  return (
    <>
      {/* <Demo/> */}
      {/* <Navbar /> */}
      <NavbarUpdate/>
      {/* <Nav/> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
