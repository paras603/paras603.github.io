import React from 'react';
import { testimonials } from '../data/testimonials';

const Testimonial: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 sm:px-10 md:px-20 lg:px-56 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 font-space text-center">
          Testimonials
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-justify">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
