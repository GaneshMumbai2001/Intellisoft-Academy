import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import Course from "./Pages/Course.jsx";
import Home from "./Pages/Home.jsx";
import SignUp from "./Pages/SignUp.jsx";
// import SignUpAdmin from "./Pages/SignUpAdmin.jsx";
// import SignUpInstructor from "./Pages/SignUpInstructor.jsx";
// import SignUpUser from "./Pages/SignUpUser.jsx";
import LoginFormAll from "./Pages/LoginFormAll.jsx";
import Landing from "./Pages/Landing.jsx"
import React from "./Pages/React.jsx"
import CourseBuy from "./Pages/CourseBuy.jsx"
import LoginForm from "./Pages/LoginFormAll.jsx";
import Artpage from "./Pages/ArtPage.jsx"
import BitcoinPage from "./Pages/BitcoinPage.jsx"
import CorePage from "./Pages/CorePage.jsx"
import LanguagecPage from "./Pages/LanguagecPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Course /> },
      { path: "/landing", element: <Landing/> },
      { path: "/coursebuy", element: <CourseBuy/> },
      { path: "/react", element: <React/> },
      { path: "/signup", element: <SignUp/> },
      { path: "/artpage", element: <Artpage/> },
      { path: "/bitcoinpage", element: <BitcoinPage/> },
      { path: "/corepage", element: <CorePage/> },
      { path: "/Language-course-page", element: <LanguagecPage/> },
      // { path: "/signup/admin", element: <SignUpAdmin /> },
      // { path: "/signup/instructor", element: <SignUpInstructor /> },
      // { path: "/signup/user", element: <SignUpUser /> },
      { path: "/login", element: <LoginFormAll /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LoginForm /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);