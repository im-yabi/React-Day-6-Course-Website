import { useNavigate } from "react-router-dom";
import "./CourseStyles.css";

export default function DataScience() {
  const navigate = useNavigate();

  return (
    <div className="course-detail">

      <div className="course-header">
        <img
          src="http://neatcorp.com/wp-content/uploads/2023/12/datascience.width-1920.jpg"
          alt="Data Science"
          className="course-cover"
        />
        <div className="course-header-text">
          <h1>📊 Data Science</h1>
          <p>
            Master <b>Python</b>, <b>Machine Learning</b>, <b>Deep Learning</b>,
            and <b>AI</b> to analyze and visualize real-world data. Become a
            skilled Data Scientist with hands-on projects and mentorship.
          </p>
          <div className="course-price">
            <span className="old-price">₹70,000</span>
            <span className="new-price">₹34,999</span>
            <span className="discount">🔥 50% OFF</span>
          </div>
        </div>
      </div>

      <div className="course-info">
        <h2>📘 Course Overview</h2>
        <ul>
          <li>🕒 Duration: 8 Months</li>
          <li>📚 Level: Beginner → Advanced</li>
          <li>🌐 Language: English</li>
          <li>🎓 Certification: Yes</li>
          <li>👨‍🏫 Mentorship: Included</li>
        </ul>
      </div>
      <div className="course-learn">
        <h2>🚀 What You Will Learn</h2>
        <ul>
          <li>Python Programming (NumPy, Pandas, Matplotlib, Seaborn)</li>
          <li>Statistics, Probability & Data Analysis</li>
          <li>Machine Learning Models & Algorithms</li>
          <li>Deep Learning with TensorFlow & PyTorch</li>
          <li>Data Visualization & Dashboards</li>
          <li>End-to-End Data Science Projects</li>
        </ul>
      </div>

      {/* Tools & Careers */}
      <div className="course-learn">
        <h2>🛠 Tools & Career Opportunities</h2>
        <ul>
          <li>Tools: Jupyter, Scikit-learn, TensorFlow, PyTorch, Power BI</li>
          <li>Job Roles: Data Analyst, Machine Learning Engineer, Data Scientist</li>
          <li>Avg. Salary in India: ₹7 LPA – ₹18 LPA</li>
        </ul>
      </div>
  
      <div className="enroll-container">
        <button
          className="enroll-btn"
          onClick={() => navigate("/course/datascience")}
        >
          Enroll Now 🚀
        </button>
      </div>
    </div>
  );
}
