import { useNavigate } from "react-router-dom";
import "./CourseStyles.css";

export default function CyberSecurity() {
  const navigate = useNavigate();

  return (
    <div className="course-detail">
      <div className="course-header">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_cyber_security.jpg"
          alt="Cyber Security"
          className="course-cover"
        />
        <div className="course-header-text">
          <h1>🔐 Cyber Security</h1>
          <p>
            Protect systems & networks from cyber threats. Learn{" "}
            <b>Ethical Hacking</b>, <b>Security Tools</b>,{" "}
            <b>Risk Management</b>, and <b>Digital Forensics</b> with
            hands-on projects and expert mentorship.
          </p>
          <div className="course-price">
            <span className="old-price">₹55,000</span>
            <span className="new-price">₹27,499</span>
            <span className="discount">🔥 50% OFF</span>
          </div>
        </div>
      </div>

      <div className="course-info">
        <h2>📘 Course Overview</h2>
        <ul>
          <li>🕒 Duration: 5 Months</li>
          <li>📚 Level: Beginner → Pro</li>
          <li>🌐 Language: English</li>
          <li>🎓 Certification: Yes</li>
          <li>👨‍🏫 Mentorship: Included</li>
        </ul>
      </div>
      <div className="course-learn">
        <h2>🚀 What You Will Learn</h2>
        <ul>
          <li>Ethical Hacking & Penetration Testing</li>
          <li>Firewalls, VPNs & Security Tools</li>
          <li>Web Security & Secure Coding Practices</li>
          <li>Risk Management & Compliance</li>
          <li>Digital Forensics & Incident Response</li>
        </ul>
      </div>

      <div className="course-learn">
        <h2>🛠 Tools & Career Opportunities</h2>
        <ul>
          <li>Tools: Wireshark, Kali Linux, Metasploit, Nessus</li>
          <li>Job Roles: Security Analyst, Ethical Hacker, Pen Tester</li>
          <li>Avg. Salary in India: ₹6.5 LPA – ₹12 LPA</li>
        </ul>
      </div>

      <div className="enroll-container">
        <button
          className="enroll-btn"
          onClick={() => navigate("/course/cybersecurity")}
        >
          Enroll Now 🚀
        </button>
      </div>
    </div>
  );
}
