import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          <h1 className="header-title">📚 ABCD Private Limited</h1>
          <h2 className="header-subtitle">India's Leading Online Education Platform</h2>
          <p className="header-text">
            Empowering learners across India with world-class courses in 
            <b> Full Stack Development</b>, <b> Data Science</b>, 
            <b> Cyber Security</b>, and <b> Career Guidance</b>.  
            Join thousands of students building their future with ABCD.
          </p>
          <div className="header-buttons">
            <button
              className="header-btn primary"
              onClick={() => navigate("/allcourses")}
            >
              Explore Courses →
            </button>
            <button
              className="header-btn secondary"
              onClick={() => navigate("/career")}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
