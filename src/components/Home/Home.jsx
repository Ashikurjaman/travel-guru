import React from "react";
import Slider from "./Slider/Slider";
import img1 from '.././../../src/assets/Sajek.png'
import img2 from '.././../../src/assets/Sreemongol.png'
import img3 from '.././../../src/assets/sundorbon.png'
const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img1} className="max-w-sm h-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Travel Guru!</h1>
      <p className="py-6">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Home;
