import React, { useState, useEffect } from "react";

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 200);
    }, 50);

    setIsVisible(true);

    return () => clearInterval(intervalId);
  }, []);

  const styles = {
    heroContainer: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      color: "#fff",
      overflow: "hidden",
      position: "relative"
    },
    backgroundAnimation: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(2px 2px at 20px 30px, #edc0ff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 40px 70px, #a78bfa, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 50px 160px, #8b5cf6, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 90px 40px, #7c3aed, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 130px 80px, #6d28d9, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 160px 120px, #5b21b6, rgba(0,0,0,0))
      `,
      backgroundSize: "200px 200px",
      opacity: 0.2,
      transform: `translateY(-${offset}px)`
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
      position: "relative",
      zIndex: 1,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 1s ease-out, transform 1s ease-out"
    },
    heading: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      background: "linear-gradient(45deg, #a78bfa, #7c3aed)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    subheading: {
      fontSize: "2rem",
      color: "#a78bfa",
      marginBottom: "2rem"
    },
    paragraph: {
      fontSize: "1.2rem",
      maxWidth: "800px",
      margin: "0 auto 2rem"
    },
    button: {
      backgroundColor: "#7c3aed",
      color: "#fff",
      padding: "15px 30px",
      fontSize: "1.2rem",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease"
    },
    featuresList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
      marginTop: "3rem"
    },
    featureItem: {
      backgroundColor: "rgba(124, 58, 237, 0.2)",
      padding: "10px 20px",
      borderRadius: "20px",
      fontSize: "0.9rem",
      transition: "all 0.3s ease"
    },
    trustText: {
      marginTop: "3rem",
      fontStyle: "italic",
      color: "#a78bfa"
    },
    imageContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "3rem"
    },
    image: {
      width: "150px",
      height: "150px",
      objectFit: "cover",
      borderRadius: "50%",
      border: "3px solid #7c3aed",
      transition: "all 0.3s ease"
    }
  };

  return (
    <div style={styles.heroContainer}>
      <div style={styles.backgroundAnimation}></div>
      <div style={styles.content}>
        <h1 style={styles.heading}>Unleash the Power of AI</h1>
        <h2 style={styles.subheading}>
          The World's First AI Content Incubator
        </h2>
        <p style={styles.paragraph}>
          Transform your content strategy with cutting-edge AI technology. From
          copywriting to video production, podcasts to newsletters, we've got
          you covered across all platforms.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#6d28d9";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#7c3aed";
            e.target.style.transform = "scale(1)";
          }}
        >
          Get Started Now
        </button>
        <div style={styles.featuresList}>
          {[
            "AI-powered copywriting",
            "Automated video content",
            "Podcast production",
            "Newsletter generation",
            "Personalized strategy"
          ].map((feature, index) => (
            <div
              key={index}
              style={styles.featureItem}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(124, 58, 237, 0.4)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(124, 58, 237, 0.2)";
                e.target.style.transform = "scale(1)";
              }}
            >
              {feature}
            </div>
          ))}
        </div>
        <p style={styles.trustText}>
          Trusted by 1000+ content creators worldwide
        </p>
        <div style={styles.imageContainer}>
          {[
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`User ${index + 1}`}
              style={styles.image}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 0 20px rgba(124, 58, 237, 0.5)";
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 0 20px rgba(124, 58, 237, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
