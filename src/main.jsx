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
import AdminLogin from "./Pages/Adminlogin.jsx";
// import SignUpInstructor from "./Pages/SignUpInstructor.jsx";
// import SignUpUser from "./Pages/SignUpUser.jsx";
import LoginFormAll from "./Pages/LoginFormAll.jsx";
import Landing from "./Pages/Landing.jsx"
import IntellisoftTheme from "./Pages/IntellisoftTheme.jsx"
import CourseBuy1 from "./Pages/CourseBuy1.jsx"
import CourseBuy2 from "./Pages/CourseBuy2.jsx"
import CourseBuy3 from "./Pages/CourseBuy3.jsx"
import CourseBuy4 from "./Pages/CourseBuy4.jsx"
import LoginForm from "./Pages/LoginFormAll.jsx";
import Artpage from "./Pages/ArtPage.jsx"
import BitcoinPage from "./Pages/BitcoinPage.jsx"
import CorePage from "./Pages/CorePage.jsx"
import LanguagecPage from "./Pages/LanguagecPage.jsx"
// import AdminPage from "./Pages/AdminPage.jsx";
import FrenchCourses from "./Pages/FrenchCourses"
import GermanCourses from "./Pages/GermanCourses"
import ItalianCourses from "./Pages/ItalianCourses.jsx"
import SpanishCourses from "./Pages/SpanishCourses"
import JapaneseCourses from "./Pages/JapaneseCourses"
import FunctionalTraining from "./Pages/FunctionalTraining"
import QuantumPage from "./Pages/QuantumPage"
import ItPage from "./Pages/ItPage"

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
      { path: "/coursebuy1", element: <CourseBuy1/> },
      { path: "/coursebuy2", element: <CourseBuy2/> },
      { path: "/coursebuy3", element: <CourseBuy3/> },
      { path: "/coursebuy4", element: <CourseBuy4/> },
      { path: "/intellisofttheme", element: <IntellisoftTheme/> },
      { path: "/signup", element: <SignUp/> },
      { path: "/artpage", element: <Artpage/> },
      { path: "/bitcoinpage", element: <BitcoinPage/> },
      { path: "/corepage", element: <CorePage/> },
      { path: "/functionaltraining", element: <FunctionalTraining/> },
      { path: "/It", element: <ItPage/> },
      { path: "/quantumpage", element: <QuantumPage/> },
      { path: "/Language-course-page", element: <LanguagecPage/> },
      { path: "/admin/login", element: <AdminLogin/> },
      { path: "/frenchcourse", element: <FrenchCourses/> },
      { path: "/germancourse", element: <GermanCourses/> },
      { path: "/italiancourse", element: <ItalianCourses/> },
      { path: "/spanishcourse", element: <SpanishCourses/> },
      { path: "/japanesecourse", element: <JapaneseCourses/> },

          // Login & Signup Routes
      // { path: "/admin/page", element: <AdminPage/> },
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

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";

// // import Course from "./Pages/Course.jsx";
// import CoursesPage from "./Pages/Course.jsx"; // Import the CoursesPage component
// import Home from "./Pages/Home.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/courses/*", element: <CoursesPage /> },
//        // Add nested routing for courses
    
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
