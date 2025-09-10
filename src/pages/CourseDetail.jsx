import { useParams } from "react-router-dom";
import "./CourseDetail.css";

export default function CourseDetail() {
  const { id } = useParams();

  const courseData = {
    fullstack: {
      title: "Full Stack Development",
      img: "https://techieops.com/wp-content/uploads/2021/09/Full-Stack-Development-Services-1.jpg",
      desc: "Master React, Node.js, MongoDB, and Express to build full-stack apps.",
      price: "₹29,999",
      duration: "6 Months",
      level: "Beginner → Advanced",
      lang: "English",
    },
    datascience: {
      title: "Data Science",
      img: "http://neatcorp.com/wp-content/uploads/2023/12/datascience.width-1920.jpg",
      desc: "Learn Python, Machine Learning, Deep Learning, and AI techniques.",
      price: "₹34,999",
      duration: "8 Months",
      level: "Intermediate",
      lang: "English",
    },
    cybersecurity: {
      title: "Cyber Security",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_cyber_security.jpg",
      desc: "Learn ethical hacking, penetration testing, and system defense.",
      price: "₹27,499",
      duration: "5 Months",
      level: "Beginner → Pro",
      lang: "English",
    },
    career: {
      title: "Career Guidance",
      img: "https://static.vecteezy.com/system/resources/previews/023/826/514/large_2x/ai-artificial-intelligence-humanoid-side-portrait-view-with-blue-and-orange-vibrant-neon-and-copy-space-artificial-intelligence-technology-concept-ai-generated-illustration-free-photo.jpg",
      desc: "Mentorship, resume building, interview prep, and career planning.",
      price: "₹14,999",
      duration: "3 Months",
      level: "All Levels",
      lang: "English",
    },
  };

  const course = courseData[id];

  if (!course) return <h2>❌ Course not found</h2>;

  return (
    <div className="course-detail">
      <img src={course.img} alt={course.title} className="course-cover" />
      <h1>{course.title}</h1>
      <p>{course.desc}</p>
      <ul>
        <li><b>Price:</b> {course.price}</li>
        <li><b>Duration:</b> {course.duration}</li>
        <li><b>Level:</b> {course.level}</li>
        <li><b>Language:</b> {course.lang}</li>
      </ul>
      <button
        className="enroll-btn"
        onClick={() => alert(`✅ Enrolled in ${course.title}`)}
      >
        Confirm Enrollment 🚀
      </button>
    </div>
  );
}
