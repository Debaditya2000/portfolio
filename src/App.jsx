import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function App() {
  const [dark, setDark] = useState(() => {
  return localStorage.getItem("theme") === "dark";});
  const [text, setText] = useState("");

  const fullText = "Hi, I'm Debaditya Laha — Software Engineer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
  localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
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
    transition: "all 0.25s ease"
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
    <div style={{
      background: dark ? "#0f172a" : "#f9fafb",
      color: dark ? "white" : "black",
      minHeight: "100vh",
      fontFamily: "Arial",
      transition: "0.3s ease"
    }}>

      {/* Navbar */}
      <div style={{
        position: "sticky",
        top: 0,
        background: dark ? "#020617" : "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1000
      }}>
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
    transition: "0.3s"
  }}
>
  {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
</button>

      </div>

      <div style={{ padding: "40px" }}>

        {/* Hero */}
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}}>
          {text}
        </motion.h1>
        <p>Python | Backend | Flask | Node.js | AWS</p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", margin: "20px 0" }}>

          <a href="https://linkedin.com/in/debaditya-laha-079767176" target="_blank" style={{ textDecoration: "none" }}>
            <button style={buttonStyle("#0A66C2")} onMouseOver={hoverOn} onMouseOut={hoverOff()}>
              <FaLinkedin /> LinkedIn
            </button>
          </a>

          <a href="https://github.com/Debaditya2000" target="_blank" style={{ textDecoration: "none" }}>
            <button style={buttonStyle("#111827")} onMouseOver={hoverOn} onMouseOut={hoverOff()}>
              <FaGithub /> GitHub
            </button>
          </a>

          <a 
              href="https://drive.google.com/file/d/19hX231mU7KgVW4b01T-ptsAGh9la944T/preview" 
              target="_blank"
              rel="noopener noreferrer"
            > 
           <button style={buttonStyle("#4F46E5")} onMouseOver={hoverOn} onMouseOut={hoverOff()}>
             <FaDownload /> Resume
           </button>
          </a>
        </div>
        {/* Projects */}
        <h2>Projects</h2>

<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "20px"
}}>

  <motion.a
    href="https://github.com/Debaditya2000/flask-event-scheduler-api"
    target="_blank"
    whileHover={{ scale: 1.05 }}
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >
    <div style={{
      padding: "20px",
      background: dark ? "#1e293b" : "white",
      borderRadius: "15px"
    }}>
      <h3>Event Scheduler API</h3>
      <p>Flask REST backend project</p>
      <p style={{ fontSize: "14px", opacity: 0.7 }}>Click to view on GitHub →</p>
    </div>
  </motion.a>

  <motion.a
    href="https://github.com/Debaditya2000/Employee-Management-System"
    target="_blank"
    whileHover={{ scale: 1.05 }}
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >
    <div style={{
      padding: "20px",
      background: dark ? "#1e293b" : "white",
      borderRadius: "15px"
    }}>
      <h3>Employee Management System</h3>
      <p>Node.js + MongoDB CRUD app</p>
      <p style={{ fontSize: "14px", opacity: 0.7 }}>Click to view on GitHub →</p>
    </div>
  </motion.a>

  <motion.a
    href="https://github.com/Debaditya2000/ID-Photo-Attendance-Tracker"
    target="_blank"
    whileHover={{ scale: 1.05 }}
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >
    <div style={{
      padding: "20px",
      background: dark ? "#1e293b" : "white",
      borderRadius: "15px"
    }}>
      <h3>Attendance Automation Tool</h3>
      <p>Python GUI automation project</p>
      <p style={{ fontSize: "14px", opacity: 0.7 }}>Click to view on GitHub →</p>
    </div>
  </motion.a>

</div>

        {/* Contact */}
        <h2 style={{ marginTop: "40px" }}>Contact Me</h2>

        <form onSubmit={sendEmail} style={{ maxWidth: "400px" }}>
          <input name="name" placeholder="Your Name" required style={{ width: "100%", padding: "10px" }} /><br /><br />
          <input name="email" placeholder="Your Email" required style={{ width: "100%", padding: "10px" }} /><br /><br />
          <textarea name="message" placeholder="Your Message" required style={{ width: "100%", padding: "10px" }} /><br /><br />
          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}
