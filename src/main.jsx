// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// import About from "./Pages/About.jsx";
// import Blog from "./Pages/Blog.jsx";
// import Contact from "./Pages/Contact.jsx";
// import Course from "./Pages/Course.jsx";
// import Home from "./Pages/Home.jsx";
// import SignUp from "./Pages/SignUp.jsx";
// // import SignUpAdmin from "./Pages/SignUpAdmin.jsx";
// // import SignUpInstructor from "./Pages/SignUpInstructor.jsx";
// // import SignUpUser from "./Pages/SignUpUser.jsx";
// // import LoginFormAll from "./Pages/LoginFormAll.jsx";
// import Landing from "./Pages/Landing.jsx"
// import LoginForm from "./Pages/LoginFormAll.jsx";
// import Artpage from "./Pages/ArtPage.jsx"
// import BitcoinPage from "./Pages/BitcoinPage.jsx"
// import CorePage from "./Pages/CorePage.jsx"
// import LanguagecPage from "./Pages/LanguagecPage.jsx"
// import FunctionalTraining from "./Pages/FunctionalTraining.jsx"
// import ItPage from "./Pages/ItPage.jsx"
// import QuantumPage from "./Pages/QuantumPage.jsx"
// import IntellisoftTheme from "./Pages/IntellisoftTheme.jsx";
// import FrenchCourses from "./Pages/FrenchCourses.jsx";
// import GermanCourses from "./Pages/GermanCourses.jsx";
// import ItalianCourses from "./Pages/ItalianCourses.jsx";
// import SpanishCourses from "./Pages/SpanishCourses.jsx";
// import JapaneseCourses from "./Pages/JapaneseCourses.jsx";
// // import BuyCart from "./Components/BuyCartSection/BuyCart.jsx";
// import CoursePurchase  from "./Components/UserCart/CoursePurchase.jsx";
// import CourseDetail from "./Components/Course/CourseDetail.jsx";
// import PagesCourse1 from "./Components/PagesCourseCard/PageCourse1.jsx";
// import PagesCourse2 from "./Components/PagesCourseCard/PageCourse2.jsx";
// import PagesCourse3 from "./Components/PagesCourseCard/PageCourse3.jsx";
// import PagesCourse4 from "./Components/PagesCourseCard/PageCourse4.jsx";
// import PagesCourse5 from "./Components/PagesCourseCard/PageCourse5.jsx";
// import PagesCourse6 from "./Components/PagesCourseCard/PageCourse6.jsx";
// import AllCourses from './Components/PagesCourseCard/AllCourses.jsx'
// import LangCourse1 from './Components/LanguageDescriptionCards/LangCourse1.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/blog", element: <Blog /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/courses", element: <Course /> },
//       { path: "/landing", element: <Landing/> },
//       // { path: "/coursebuy", element: <CourseBuy/> },
//       // { path: "/react", element: <React/> },
//       { path: "/signup", element: <SignUp/> },
//       { path: "/artpage", element: <Artpage/> },
//       { path: "/bitcoinpage", element: <BitcoinPage/> },
//       { path: "/corepage", element: <CorePage/> },
//       { path: "/functionaltraining", element: <FunctionalTraining /> },
//       { path: "/It", element: <ItPage/> },
//       { path: "/quantumpage", element: <QuantumPage/> },
//       { path: "/frenchcourse", element: <FrenchCourses/> },
//       { path: "/germancourse", element: <GermanCourses/> },
//       { path: "/italiancourse", element: <ItalianCourses/> },
//       { path: "/spanishcourse", element: <SpanishCourses/> },
//       { path: "/japanesecourse", element: <JapaneseCourses/> },
//       { path: "/intellisoftTheme", element: <IntellisoftTheme/> },
//       { path: "/Language-course-page", element: <LanguagecPage/> },
//       // { path: "course/:id", element: <BuyCart/> },
//       {path: "course/:id", element: <CourseDetail />}, 
//       {path: "pages/:id", element: <PagesCourse1/>},
//       {path: "bitcoin/:id", element: <PagesCourse2/>},
//       {path: "core/:id", element: <PagesCourse3/>},
//       {path: "functionaltraining/:id", element: <PagesCourse4/>},
//       {path: "It/:id", element: <PagesCourse5/>},
//       {path: "Quantum/:id", element: <PagesCourse6/>},
//       {path: "AllCourses/:id", element: <AllCourses/>},
//       // { path: "/user/cart", element:<CoursePurchase /> },
//       {path:"/user/cart", element:<CoursePurchase />},
//       // { path: "/signup/admin", element: <SignUpAdmin /> },
//       // { path: "/signup/instructor", element: <SignUpInstructor /> },
//       // { path: "/signup/user", element: <SignUpUser /> },
//       {path: "RelatedCourses/:id", element: <LangCourse1/>},
//       // {path: "bitcoin/:id", element: <LangCourse2/>},
//       // { path: "/login", element: <LoginFormAll /> },
//       { path: "/signup", element: <SignUp /> },
//       { path: "/login", element: <LoginForm /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );


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
import LoginForm from "./Pages/LoginFormAll.jsx";
import ForgotPwd from "./Pages/ForgotPwd.jsx";
import ResetPwd from "./Pages/ResetPwd.jsx";

import Artpage from "./Pages/ArtPage.jsx"
import BitcoinPage from "./Pages/BitcoinPage.jsx"
import CorePage from "./Pages/CorePage.jsx"
import LanguagecPage from "./Pages/LanguagecPage.jsx"
import FunctionalTraining from "./Pages/FunctionalTraining.jsx"
import ItPage from "./Pages/ItPage.jsx"
import QuantumPage from "./Pages/QuantumPage.jsx"
import IntellisoftTheme from "./Pages/IntellisoftTheme.jsx";
import FrenchCourses from "./Pages/FrenchCourses.jsx";
import GermanCourses from "./Pages/GermanCourses.jsx";
import ItalianCourses from "./Pages/ItalianCourses.jsx";
import SpanishCourses from "./Pages/SpanishCourses.jsx";
import JapaneseCourses from "./Pages/JapaneseCourses.jsx";
// import BuyCart from "./Components/BuyCartSection/BuyCart.jsx";
// import CoursePurchase  from "./Components/UserCart/CoursePurchase.jsx";
import CourseDetail from "./Components/Course/CourseDetail.jsx";
import PagesCourse1 from "./Components/PagesCourseCard/PageCourse1.jsx";
import PagesCourse2 from "./Components/PagesCourseCard/PageCourse2.jsx";
import PagesCourse3 from "./Components/PagesCourseCard/PageCourse3.jsx";
import PagesCourse4 from "./Components/PagesCourseCard/PageCourse4.jsx";
import PagesCourse5 from "./Components/PagesCourseCard/PageCourse5.jsx";
import PagesCourse6 from "./Components/PagesCourseCard/PageCourse6.jsx";
import AllCourses from './Components/PagesCourseCard/AllCourses.jsx'
import LangCourse1 from './Components/LanguageDescriptionCards/LangCourse1.jsx'


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
      // { path: "/coursebuy", element: <CourseBuy/> },
      // { path: "/react", element: <React/> },
      { path: "/signup", element: <SignUp/> },
      
      { path: "/artpage", element: <Artpage/> },
      { path: "/bitcoinpage", element: <BitcoinPage/> },
      { path: "/corepage", element: <CorePage/> },
      { path: "/functionaltraining", element: <FunctionalTraining /> },
      { path: "/It", element: <ItPage/> },
      { path: "/quantumpage", element: <QuantumPage/> },
      { path: "/frenchcourse", element: <FrenchCourses/> },
      { path: "/germancourse", element: <GermanCourses/> },
      { path: "/italiancourse", element: <ItalianCourses/> },
      { path: "/spanishcourse", element: <SpanishCourses/> },
      { path: "/japanesecourse", element: <JapaneseCourses/> },
      { path: "/intellisoftTheme", element: <IntellisoftTheme/> },
      { path: "/Language-course-page", element: <LanguagecPage/> },
      // { path: "course/:id", element: <BuyCart/> },
      {path: "course/:id", element: <CourseDetail />}, 
      {path: "pages/:id", element: <PagesCourse1/>},
      {path: "bitcoin/:id", element: <PagesCourse2/>},
      {path: "core/:id", element: <PagesCourse3/>},
      {path: "functionaltraining/:id", element: <PagesCourse4/>},
      {path: "It/:id", element: <PagesCourse5/>},
      {path: "Quantum/:id", element: <PagesCourse6/>},
      {path: "AllCourses/:id", element: <AllCourses/>},
      // { path: "/user/cart", element:<CoursePurchase /> },
      // {path:"/user/cart", element:<CoursePurchase />},
      // { path: "/signup/admin", element: <SignUpAdmin /> },
      // { path: "/signup/instructor", element: <SignUpInstructor /> },
      // { path: "/signup/user", element: <SignUpUser /> },
      {path: "RelatedCourses/:id", element: <LangCourse1/>},
      // {path: "bitcoin/:id", element: <LangCourse2/>},
      { path: "/login", element: <LoginFormAll /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/forgot-password", element: <ForgotPwd /> },
      { path: "/reset-password/:token", element: <ResetPwd /> }, 
      { path: "*", element: <h1>404 - Page Not Found</h1> },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);