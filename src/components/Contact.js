import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="bg-blaack-600 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">Let's Design Together</h3>
          <p className="text-gray-300 mb-6 text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 mb-4 sm:mb-0 sm:mr-2 rounded-lg border-none bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
