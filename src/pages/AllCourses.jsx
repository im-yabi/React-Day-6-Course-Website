import { useNavigate } from "react-router-dom";
import "./Courses.css";

export default function AllCourses() {
  const navigate = useNavigate();

  const courses = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      lang: "English",
      duration: "6 Months",
      level: "Beginner → Advanced",
      img: "https://techieops.com/wp-content/uploads/2021/09/Full-Stack-Development-Services-1.jpg",
      desc: "Learn HTML, CSS, JavaScript, React, Node.js, MongoDB and build real-world projects."
    },
    {
      id: "datascience",
      title: "Data Science",
      lang: "English",
      duration: "8 Months",
      level: "Intermediate",
      img: "http://neatcorp.com/wp-content/uploads/2023/12/datascience.width-1920.jpg",
      desc: "Master Python, Machine Learning, Deep Learning, and AI techniques for data-driven insights."
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      lang: "English",
      duration: "5 Months",
      level: "Beginner → Pro",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_cyber_security.jpg",
      desc: "Learn ethical hacking, penetration testing, and how to secure systems against cyber threats."
    },
    {
      id: "career",
      title: "Career Guidance",
      lang: "English",
      duration: "3 Months",
      level: "All Levels",
      img: "https://static.vecteezy.com/system/resources/previews/023/826/514/large_2x/ai-artificial-intelligence-humanoid-side-portrait-view-with-blue-and-orange-vibrant-neon-and-copy-space-artificial-intelligence-technology-concept-ai-generated-illustration-free-photo.jpg",
      desc: "Get expert mentorship, resume building, interview prep, and career planning strategies."
    }
  ];

  return (
    <div className="course-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.img} alt={course.title} className="course-img" />
          <div className="course-content">
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <ul>
              <li><b>Language:</b> {course.lang}</li>
              <li><b>Duration:</b> {course.duration}</li>
              <li><b>Level:</b> {course.level}</li>
            </ul>
            <button
              className="enroll-btn"
              onClick={() => navigate(`/course/${course.id}`)}
            >
              Enroll Now 🚀
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
