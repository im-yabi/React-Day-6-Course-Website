import { useNavigate } from "react-router-dom";
import "./CourseStyles.css";

export default function FullStack() {
  const navigate = useNavigate();

  return (
    <div className="course-detail">
            <div className="course-header">
        <img
          src="https://techieops.com/wp-content/uploads/2021/09/Full-Stack-Development-Services-1.jpg"
          alt="Full Stack Development"
          className="course-cover"
        />
        <div className="course-header-text">
          <h1>💻 Full Stack Development</h1>
          <p>
            Master <b>Frontend</b>, <b>Backend</b>, and <b>Database</b>{" "}
            technologies. Learn <b>React</b>, <b>Node.js</b>, <b>Express</b>, 
            and <b>MongoDB</b> to build scalable and modern web applications.
          </p>
          <div className="course-price">
            <span className="old-price">₹60,000</span>
            <span className="new-price">₹29,999</span>
            <span className="discount">🔥 50% OFF</span>
          </div>
        </div>
      </div>
      <div className="course-info">
        <h2>📘 Course Overview</h2>
        <ul>
          <li>🕒 Duration: 6 Months</li>
          <li>📚 Level: Beginner → Advanced</li>
          <li>🌐 Language: English</li>
          <li>🎓 Certification: Yes</li>
          <li>👨‍🏫 Mentorship: Included</li>
        </ul>
      </div>
      <div className="course-learn">
        <h2>🚀 What You Will Learn</h2>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB & SQL Basics</li>
          <li>Authentication & Security</li>
          <li>REST APIs & GraphQL</li>
          <li>Deployment on Cloud (AWS / Vercel / Netlify)</li>
        </ul>
      </div>
      <div className="course-learn">
        <h2>🛠 Tools & Career Opportunities</h2>
        <ul>
          <li>Tools: VS Code, Git, GitHub, Postman, MongoDB Atlas</li>
          <li>Job Roles: Full Stack Developer, MERN Developer, Web Engineer</li>
          <li>Avg. Salary in India: ₹6 LPA – ₹15 LPA</li>
        </ul>
      </div>
      <div className="enroll-container">
        <button
          className="enroll-btn"
          onClick={() => navigate("/course/fullstack")}
        >
          Enroll Now 🚀
        </button>
      </div>
    </div>
  );
}
