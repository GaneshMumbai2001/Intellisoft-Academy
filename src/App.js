import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Assessment from './pages/Assessment';
import CourseDetails from './pages/CourseDetails';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Discussion from './pages/Discussion';
function App() {
  return (
 <Router>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/assessment/:courseId" element={<Assessment />} />
     <Route path="/course/:courseId" element={<CourseDetails />} />
     <Route path="/courses" element={<Courses />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/discussion/:courseId" element={<Discussion />} />
   </Routes>
 </Router>
  );
}

export default App;
