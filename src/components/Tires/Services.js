import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';
import React from 'react';

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600">
            We provide a wide range of creative services to suit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="card bordered">
            <figure className="px-10 pt-10">
              <FaPaintBrush className="text-5xl" />
            </figure> 
            <div className="card-body">
              <h2 className="font-bold text-2xl">Design</h2>
              <p>Creativity and innovation in every design.</p>
            </div>
          </div>

          <div className="card bordered">
            <figure className="px-10 pt-10">
              <FaCode className="text-5xl" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">Development</h2>
              <p>High-quality code for your web projects.</p>
            </div>
          </div>

          <div className="card bordered">
            <figure className="px-10 pt-10">
              <FaMobileAlt className="text-5xl" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">Mobile</h2>
              <p>Responsive and functional mobile solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
