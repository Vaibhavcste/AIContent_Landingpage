import React, { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or a service like Mailchimp
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", company: "", message: "" });
    alert("Thanks for signing up! We'll be in touch soon.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>
          Ready to Revolutionize Your Content Creation?
        </h2>
        <p style={styles.subheading}>
          Sign up now and let AI power your content strategy!
        </p>
      </div>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 20px",
    backgroundColor: "#7c3aed",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  content: {
    textAlign: "center",
    marginBottom: "40px"
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px"
  },
  subheading: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "0 auto"
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  input: {
    padding: "15px",
    borderRadius: "5px",
    border: "none",
    fontSize: "1rem"
  },
  textarea: {
    padding: "15px",
    borderRadius: "5px",
    border: "none",
    fontSize: "1rem",
    minHeight: "100px",
    resize: "vertical"
  },
  button: {
    padding: "15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ffffff",
    color: "#7c3aed",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  }
};

export default CTA;
