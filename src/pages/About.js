import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h2 className="text-center mb-4">About Burger House 🍔</h2>

      <section className="mission">
        <h3>Our Mission</h3>
        <p>
          Burger House was founded in 2020 with a simple mission: to serve the juiciest, freshest burgers in town.
          We believe in quality, freshness, and flavor. Every burger we create is made from 100% beef, 
          sourced locally, and prepared with care. Our goal is to provide an unforgettable burger experience.
        </p>
      </section>

      <section className="values">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Quality:</strong> We use only the finest ingredients to craft each burger.</li>
          <li><strong>Freshness:</strong> We ensure that every burger is made fresh to order.</li>
          <li><strong>Customer Satisfaction:</strong> We are committed to providing top-notch service to every customer.</li>
          <li><strong>Sustainability:</strong> We care about our planet, which is why we prioritize sustainable practices in sourcing and packaging.</li>
        </ul>
      </section>

      <section className="choose-us">
        <h3>Why Choose Us?</h3>
        <p>
          At Burger House, we don’t just make burgers—we make memories. Whether you're grabbing a quick bite with friends or enjoying a meal with family, 
          our burgers are crafted to satisfy every craving. Our customers choose us because we offer:
        </p>
        <ul>
          <li>A wide variety of mouth-watering burger options</li>
          <li>Healthy alternatives and vegetarian options</li>
          <li>Fresh, locally sourced ingredients</li>
          <li>Fast and friendly service</li>
        </ul>
      </section>

      <section className="join">
        <h3>Join Us Today</h3>
        <p>
          Visit Burger House for a burger experience like no other. We can't wait to serve you the best burger in town!
        </p>
      </section>
    </div>
  );
}

export default About;
