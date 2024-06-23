import React from "react";

const ServiceCard = ({ title, description, icon }) => (
  <div style={styles.card}>
    <div style={styles.iconContainer}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDescription}>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "AI-Powered Copywriting",
      description:
        "Generate high-quality, engaging content for any platform with our advanced AI algorithms.",
      icon: "✍️"
    },
    {
      title: "Video Content Creation",
      description:
        "Automatically create and edit professional-looking videos tailored to your brand.",
      icon: "🎥"
    },
    {
      title: "Podcast Production",
      description:
        "Streamline your podcast workflow with AI-assisted editing, transcription, and distribution.",
      icon: "🎙️"
    },
    {
      title: "Social Media Management",
      description:
        "Optimize your social media presence with AI-driven content scheduling and analytics.",
      icon: "📱"
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your search engine rankings with AI-powered keyword research and content optimization.",
      icon: "🔍"
    },
    {
      title: "Personalized Content Strategy",
      description:
        "Get data-driven insights to create a tailored content strategy that resonates with your audience.",
      icon: "📊"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Services</h2>
      <p style={styles.subheading}>
        Revolutionize your content creation process with our AI-powered tools
      </p>
      <div style={styles.cardContainer}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "80px 20px",
    textAlign: "center"
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px"
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "800px",
    margin: "0 auto 40px"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "30px",
    width: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  },
  iconContainer: {
    fontSize: "3rem",
    marginBottom: "20px"
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "15px"
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.5"
  }
};

export default Services;
