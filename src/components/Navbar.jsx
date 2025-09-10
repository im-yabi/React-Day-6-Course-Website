import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "10px 15px",
    fontWeight: "600",
    color: isActive ? "#fff" : "#333",
    background: isActive
      ? "linear-gradient(45deg, #ff4b2b, #ff416c)"
      : "transparent",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "15px",
        background: "linear-gradient(90deg, #667eea, #764ba2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <NavLink to="/" end style={linkStyle}>Home</NavLink>
      <NavLink to="/allcourses" style={linkStyle}>All Courses</NavLink>
      <NavLink to="/fullstack" style={linkStyle}>Full Stack</NavLink>
      <NavLink to="/datascience" style={linkStyle}>Data Science</NavLink>
      <NavLink to="/cybersecurity" style={linkStyle}>Cyber Security</NavLink>
      <NavLink to="/career" style={linkStyle}>Career</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>

    </nav>
  );
}
