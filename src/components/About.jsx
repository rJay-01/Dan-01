import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-[#B41C6C] mb-8">About Mags</h1>
        <p className="text-lg leading-relaxed mb-6">
          Mags are a crucial component in the automotive world, designed to support and enhance the performance and aesthetics of your vehicle's wheels. 
          Known for their durability, lightweight structure, and stylish designs, Mags are more than just functional—they're a statement of quality and craftsmanship.
        </p>

        <h2 className="text-2xl font-bold text-[##000000] mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-6">
          Our mission is to provide top-quality Mags that combine strength, style, and performance. We aim to meet the needs of car enthusiasts and everyday drivers by delivering products that ensure safety, reliability, and visual appeal.
        </p>

        <h2 className="text-2xl font-bold text-[#B41C6C] mb-4">Why Choose Our Mags?</h2>
        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6">
          <li><strong>Premium Materials:</strong> Crafted from high-quality alloys to ensure strength and lightweight performance.</li>
          <li><strong>Stylish Designs:</strong> A wide variety of designs to suit every vehicle and personal taste.</li>
          <li><strong>Enhanced Performance:</strong> Engineered to improve vehicle handling, fuel efficiency, and safety.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#B41C6C] mb-4">Upgrade Your Ride</h2>
        <p className="text-lg leading-relaxed">
          Ready to elevate your driving experience? Explore our range of Mags and find the perfect fit for your vehicle. Follow us for updates, tips, and the latest trends in automotive accessories. With our Mags, you’ll drive with confidence and style.
        </p>
      </div>
    </div>
  );
};

export default About;
