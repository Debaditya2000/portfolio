import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [text, setText] = useState("");

  const fullText = "Debaditya Laha";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79d58ol",
        "template_0nug984",
        e.target,
        "S4UsVToLTJLwmwE3F"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  const buttonStyle = (bg) => ({
    background: bg,
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "12px 18px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
    transition: "all 0.25s ease",
  });

  const hoverOn = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.35)";
  };

  const hoverOff = () => (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.2)";
  };

  return (
    <div
      style={{
        background: dark ? "#0f172a" : "#f9fafb",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        fontFamily: "Arial",
        transition: "0.3s ease",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          background: dark ? "#020617" : "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1000,
        }}
      >
        <strong>Debaditya</strong>
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "8px 14px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            background: dark ? "#334155" : "#e2e8f0",
            color: dark ? "white" : "black",
          }}
        >
          {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        {/* Hero */}
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {text}
        </motion.h1>

        <h2 style={{ fontWeight: "normal" }}>
          Software Engineer | Python | Backend | AWS
        </h2>

        <p style={{ maxWidth: "650px" }}>
          I build real-world backend systems and web applications using Python,
          Flask, Node.js, and MongoDB. Actively seeking entry-level Software
          Engineer / Backend Developer roles.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            margin: "20px 0",
          }}
        >
          <a
            href="https://linkedin.com/in/debaditya-laha-079767176"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={buttonStyle("#0A66C2")}
              onMouseOver={hoverOn}
              onMouseOut={hoverOff()}
            >
              <FaLinkedin /> LinkedIn
            </button>
          </a>

          <a
            href="https://github.com/Debaditya2000"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={buttonStyle("#111827")}
              onMouseOver={hoverOn}
              onMouseOut={hoverOff()}
            >
              <FaGithub /> GitHub
            </button>
          </a>

          <a
            href="https://drive.google.com/file/d/19hX231mU7KgVW4b01T-ptsAGh9la944T/preview"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={buttonStyle("#4F46E5")}
              onMouseOver={hoverOn}
              onMouseOut={hoverOff()}
            >
              <FaDownload /> Resume
            </button>
          </a>
        </div>

        {/* About */}
        <h2>About Me</h2>
        <p style={{ maxWidth: "750px", lineHeight: "1.6" }}>
          I’m a Computer Science graduate passionate about backend development,
          APIs, and cloud technologies. I enjoy building practical applications
          that solve real-world problems.
        </p>
        <p style={{ maxWidth: "750px", lineHeight: "1.6" }}>
          I have hands-on experience with Python, Flask, Node.js, MongoDB, REST
          APIs, Git, and Linux fundamentals. I’m currently seeking opportunities
          as a Software Engineer, Backend Developer, or Cloud/DevOps Intern.
        </p>

        {/* Projects */}
        <h2 style={{ marginTop: "40px" }}>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Event Scheduler API",
              desc: "Backend REST API to create and manage events.",
              tech: "Python, Flask, REST API, Postman",
              link: "https://github.com/Debaditya2000/flask-event-scheduler-api",
            },
            {
              title: "Employee Management System",
              desc: "Full-stack CRUD web app for managing employees.",
              tech: "Node.js, Express, MongoDB, EJS, Bootstrap",
              link: "https://github.com/Debaditya2000/Employee-Management-System",
            },
            {
              title: "Attendance Automation Tool",
              desc: "Python tool to automate attendance processing.",
              tech: "Python",
              link: "https://github.com/Debaditya2000/ID-Photo-Attendance-Tracker",
            },
          ].map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  padding: "20px",
                  background: dark ? "#1e293b" : "white",
                  borderRadius: "15px",
                  minHeight: "160px",
                }}
              >
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p style={{ fontSize: "14px", opacity: 0.8 }}>
                  Tech: {project.tech}
                </p>
                <p style={{ fontSize: "14px", opacity: 0.6 }}>
                  Click to view on GitHub →
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact */}
        <h2 style={{ marginTop: "50px" }}>Contact</h2>

        <p>
          📧 Email: debadityalaha@gmail.com <br />
          💼 LinkedIn: linkedin.com/in/debaditya-laha-079767176 <br />
          💻 GitHub: github.com/Debaditya2000 <br />
          📍 Bengaluru, India
        </p>

        <form onSubmit={sendEmail} style={{ maxWidth: "400px" }}>
          <input
            name="name"
            placeholder="Your Name"
            required
            style={{ width: "100%", padding: "10px" }}
          />
          <br />
          <br />
          <input
            name="email"
            placeholder="Your Email"
            required
            style={{ width: "100%", padding: "10px" }}
          />
          <br />
          <br />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            style={{ width: "100%", padding: "10px" }}
          />
          <br />
          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
