import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>AI Content Creator</h3>
          <p style={styles.description}>
            Revolutionizing content creation with AI-powered solutions.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li>
              <a href="#home" style={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" style={styles.link}>
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" style={styles.link}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Connect With Us</h3>
          <div style={styles.socialIcons}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              🐦
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              📘
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              💼
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              📷
            </a>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {currentYear} AI Content Creator. All rights reserved.
        </p>
        <p style={styles.credit}>
          Designed by{" "}
          <a
            href="https://alternate.ventures/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.creditLink}
          >
            Alternate Ventures
          </a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    padding: "50px 20px 20px"
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  section: {
    flex: "1 1 300px",
    marginBottom: "30px"
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "15px"
  },
  description: {
    fontSize: "0.9rem",
    lineHeight: "1.5"
  },
  linkList: {
    listStyle: "none",
    padding: 0
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.9rem",
    lineHeight: "2"
  },
  socialIcons: {
    display: "flex",
    gap: "15px"
  },
  socialIcon: {
    fontSize: "1.5rem",
    color: "#ffffff",
    textDecoration: "none"
  },
  bottomBar: {
    borderTop: "1px solid #333",
    marginTop: "30px",
    paddingTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
  },
  copyright: {
    fontSize: "0.9rem"
  },
  credit: {
    fontSize: "0.9rem"
  },
  creditLink: {
    color: "#7c3aed",
    textDecoration: "none"
  }
};

export default Footer;
