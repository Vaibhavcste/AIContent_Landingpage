import React from "react";

const PricingCard = ({ service, price, features }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{service}</h3>
    <p style={styles.price}>
      Starting at <span style={styles.priceAmount}>${price}</span> / month
    </p>
    <ul style={styles.featureList}>
      {features.map((feature, index) => (
        <li key={index} style={styles.feature}>
          {feature}
        </li>
      ))}
    </ul>
    <button style={styles.button}>Get Started</button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      service: "Copywriting",
      price: 50,
      features: [
        "AI-powered content generation",
        "Multiple content types",
        "Unlimited revisions"
      ]
    },
    {
      service: "Content Creation",
      price: 1000,
      features: ["Video production", "Graphic design", "Animation"]
    },
    {
      service: "Podcast Production",
      price: 1000,
      features: [
        "Recording assistance",
        "Editing and post-production",
        "Distribution support"
      ]
    },
    {
      service: "Social Media Management",
      price: 500,
      features: ["Content generation", "Scheduling", "Analytics and reporting"]
    },
    {
      service: "SEO Optimization",
      price: 500,
      features: [
        "Keyword research",
        "On-page optimization",
        "Link building strategies"
      ]
    },
    {
      service: "Personalized Strategy",
      price: 300,
      features: [
        "Custom content plan",
        "Audience analysis",
        "Performance tracking"
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Flexible Pricing Plans</h2>
      <p style={styles.subheading}>
        Choose the services that fit your needs. All plans are customizable.
      </p>
      <div style={styles.cardContainer}>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <p style={styles.customNote}>
        Need a custom plan?{" "}
        <a href="#contact" style={styles.link}>
          Contact us
        </a>{" "}
        for personalized pricing.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 20px",
    backgroundColor: "#ffffff"
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px"
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#666",
    textAlign: "center",
    marginBottom: "50px"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  card: {
    width: "300px",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "15px"
  },
  price: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "20px"
  },
  priceAmount: {
    fontSize: "1.8rem",
    color: "#7c3aed",
    fontWeight: "bold"
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "30px"
  },
  feature: {
    margin: "10px 0",
    color: "#444"
  },
  button: {
    backgroundColor: "#7c3aed",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  },
  customNote: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "1.1rem",
    color: "#666"
  },
  link: {
    color: "#7c3aed",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Pricing;
