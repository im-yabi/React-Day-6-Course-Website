import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Header from "./components/Header";
import Home from "./pages/Home";
import AllCourses from "./pages/AllCourses";
import CourseDetail from "./pages/CourseDetail";
import FullStack from "./pages/FullStack";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import Career from "./pages/Career";
import About from "./pages/About";    

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/header" element={<Header />} />
          <Route path="/allcourses" element={<AllCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
      <Footer />  
    </Router>
  );
}

export default App;
