import React from "react";

const ProcessStep = ({ number, title, description }) => (
  <div style={styles.step}>
    <div style={styles.stepNumber}>{number}</div>
    <h3 style={styles.stepTitle}>{title}</h3>
    <p style={styles.stepDescription}>{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your account and choose a plan that fits your needs."
    },
    {
      title: "Define Your Project",
      description: "Tell us about your content goals and target audience."
    },
    {
      title: "AI Generation",
      description: "Our AI analyzes your inputs and generates tailored content."
    },
    {
      title: "Review and Refine",
      description:
        "Review the AI-generated content and make any necessary adjustments."
    },
    {
      title: "Publish and Analyze",
      description:
        "Publish your content and track its performance with our analytics tools."
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>How It Works</h2>
      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <ProcessStep key={index} number={index + 1} {...step} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 20px",
    backgroundColor: "#f0f0f0"
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "50px"
  },
  stepsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  step: {
    width: "200px",
    margin: "20px",
    textAlign: "center"
  },
  stepNumber: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#7c3aed",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0 auto 20px"
  },
  stepTitle: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "10px"
  },
  stepDescription: {
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.5"
  }
};

export default HowItWorks;
