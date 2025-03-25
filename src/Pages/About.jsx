import React from 'react';
import { FooterThree } from "../Components/Footer";
import { NavbarContacts } from "../Components/NavbarContact";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Navbar */}
      <NavbarContacts />

      <div className="py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-green-600 mb-6">About Bagrit</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Bagrit</strong> is an innovative startup dedicated to promoting sustainability by 
            offering <span className="text-green-500 font-semibold">eco-friendly plastic products</span>. 
            Our mission is to reduce plastic waste by providing sustainable and biodegradable 
            alternatives that are safe for the environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Developed by <span className="text-green-500 font-semibold">engineering college students</span>, 
            Bagrit is not just a platform—it is a movement towards a greener planet. 
            Our team believes in leveraging technology to create a positive impact on the environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our website offers a seamless shopping experience with a range of 
            eco-friendly plastic products. With easy navigation, secure payment options, 
            and a user-friendly interface, Bagrit is committed to delivering 
            quality products while contributing to a sustainable future.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="text-green-500 font-semibold">Join us</span> on our journey towards reducing 
            plastic pollution and making the world a better place for future generations. 
            Together, we can create a lasting impact.
          </p>
        </div>
      </div>

      {/* Footer */}
      <FooterThree />
      
    </div>
  );
};

export default About;
