import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../components/Header";

export default function Home() {
  const images = [
    "https://infinigeek.com/assets/5-Animation-Techniques-To-Boost-Your-Web-Design-2-min-scaled.jpeg", 
    "https://techieops.com/wp-content/uploads/2021/09/Full-Stack-Development-Services-1.jpg",
    "http://neatcorp.com/wp-content/uploads/2023/12/datascience.width-1920.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_cyber_security.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Header />
      <div className="home-hero-wrapper">
        <div className="home-hero">
          <div className="hero-overlay">
            <h1 className="hero-title">🚀 Welcome to Our Course Platform</h1>
            <p className="hero-subtitle">
              Learn Full Stack, Data Science, Cyber Security & Career Skills
            </p>
          </div>
          <img
            key={index}
            src={images[index]}
            alt="Course Banner"
            className="hero-img fade-in"
          />
        </div>
      </div>
    </>
  );
}
