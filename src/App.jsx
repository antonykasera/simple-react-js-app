import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Programs" title="What We Offer" />
        <Programs />
      </div>
    </div>
  );
};

export default App;
