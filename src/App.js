// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
      {/* Other components */}
    </div>
  );
}

export default App;
