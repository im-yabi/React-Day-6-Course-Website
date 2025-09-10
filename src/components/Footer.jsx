import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>🚀 Course Platform</h3>
          <p>Learn Full Stack, Data Science, Cyber Security & Career Skills.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/allcourses">All Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/career">Career Guidance</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: yabeshm01@gmail.com</p>
          <p>Phone: +91 6379583385</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Course Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
