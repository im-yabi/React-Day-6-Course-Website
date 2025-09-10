import { useNavigate } from "react-router-dom";
import "./CourseStyles.css";

export default function Career() {
  const navigate = useNavigate();

  return (
    <div className="course-detail">
      <div className="course-header">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/826/514/large_2x/ai-artificial-intelligence-humanoid-side-portrait-view-with-blue-and-orange-vibrant-neon-and-copy-space-artificial-intelligence-technology-concept-ai-generated-illustration-free-photo.jpg"
          alt="Career Guidance"
          className="course-cover"
        />
        <div className="course-header-text">
          <h1>🎓 Career Guidance</h1>
          <p>
            Build your future with <b>mentorship</b>, <b>resume building</b>,{" "}
            <b>interview preparation</b>, and <b>job strategies</b> for 
            students & professionals. Get personalized support to become job-ready.
          </p>
          <div className="course-price">
            <span className="old-price">₹30,000</span>
            <span className="new-price">₹14,999</span>
            <span className="discount">🔥 50% OFF</span>
          </div>
        </div>
      </div>
      <div className="course-info">
        <h2>📘 Course Overview</h2>
        <ul>
          <li>🕒 Duration: 3 Months</li>
          <li>📚 Level: All Levels</li>
          <li>🌐 Language: English</li>
          <li>🎓 Certification: Yes</li>
          <li>👨‍🏫 Mentorship: 1-on-1 Career Coaching</li>
        </ul>
      </div>
      <div className="course-learn">
        <h2>🚀 What You Will Learn</h2>
        <ul>
          <li>Personalized Career Roadmap & Skill Gap Analysis</li>
          <li>Resume Building, LinkedIn Optimization & Portfolio Creation</li>
          <li>Mock Interviews with HR & Technical Experts</li>
          <li>Soft Skills, Communication & Confidence Building</li>
          <li>Job Search Strategies & Networking Skills</li>
        </ul>
      </div>
      <div className="course-learn">
        <h2>🎁 Extra Benefits</h2>
        <ul>
          <li>Exclusive Career Counseling Sessions</li>
          <li>Access to Job Boards & Industry Connections</li>
          <li>Lifetime Access to Recorded Sessions</li>
          <li>Placement Assistance & Industry Referrals</li>
        </ul>
      </div>

      <div className="enroll-container">
        <button
          className="enroll-btn"
          onClick={() => navigate("/course/career")}
        >
          Enroll Now 🚀
        </button>
      </div>
    </div>
  );
}
